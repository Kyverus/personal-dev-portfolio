import { useCallback } from "react";

export function useAPIRequestHandler() {
  const handleAPIRequest = useCallback(
    async (requestFn, responseType = "data") => {
      try {
        const response = await requestFn();
        const payload = responseType === "full" ? response : response.data;

        return {
          data: payload,
          errors: null,
          status: response.status,
        };
      } catch (error) {
        return {
          data: null,
          errors: error,
          errors: error.response?.status || 500,
        };
      }
    },
    [],
  );

  return { handleAPIRequest };
}
