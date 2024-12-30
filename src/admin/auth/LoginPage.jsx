import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../_contexts/AuthContextProvider.jsx";

function LoginPage() {
  const { loginUser } = useAuthContext();
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function formChange(e) {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (formDetails.username != "" && formDetails.password != "") {
      setLoading(true);
      const res = await loginUser(formDetails);

      if (res.success) {
        navigate("/admin");
      } else {
        console.log(res.errors);
      }

      formDetails.email = "";
      formDetails.password = "";
      usernameRef.current.value = "";
      passwordRef.current.value = "";
      setLoading(false);
    }
  }

  return (
    <div className="min-h-dvh flex">
      <div className="container mx-auto md:w-[500px] mt-[30vh] p-4">
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username">USERNAME</label>
            <input
              ref={usernameRef}
              className="text-black p-2"
              type="text"
              id="username"
              name="username"
              onChange={formChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">PASSWORD</label>
            <input
              ref={passwordRef}
              className="text-black p-2"
              type="password"
              id="password"
              name="password"
              onChange={formChange}
            />
          </div>

          <button
            onClick={handleLogin}
            className={
              "font-bold " + (loading ? "text-slate-500" : "text-light-green")
            }
            disabled={loading}
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
