import axios from "axios";
const BASE_URL = "https://api-kirlian-dev-portfolio.vercel.app";
// const BASE_URL = "http://localhost:3000";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

function addInstanceInterceptors(axiosInstance) {
  axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
      console.log(error);
      if (error.response.status === 401) {
        try {
          const refRes = await axios.get(BASE_URL + "/api/users/refresh", {
            withCredentials: true,
          });

          if (refRes.status === 200) {
            axiosPrivate.defaults.headers.common[
              "Authorization"
            ] = `BEARER ${refRes.data.accessToken}`;

            error.config.headers[
              "Authorization"
            ] = `Bearer ${refRes.data.accessToken}`;

            console.log("token refreshed");

            return axios(error.config);
          }
        } catch (error) {
          console.log("token invalid", error);
        }
      }
      return error;
    }
  );
}

addInstanceInterceptors(axiosPrivate);

export { axiosPrivate };
