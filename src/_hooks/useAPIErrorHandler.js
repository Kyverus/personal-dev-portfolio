import { useCallback } from "react";
import { toast } from "react-toastify";

export function useAPIErrorHandler() {
  const handleAPIErrors = useCallback(async (response) => {
    if (!response) {
      toast.error("No response received");
      return false;
    }

    if (response.status >= 200 && response.status < 300) {
      return true;
    }

    if (response.errors) {
      const errors = response.errors;

      if (response.status >= 500) {
        console.error("Server error:", errors.response?.data.message || errors);
      } else if (response.status >= 400 && response.status < 500) {
        toast.error(errors.response?.data?.message || "An error occurred");
      } else {
        console.warn("Unexpected response status:", response.status);
      }
    }
    return false;
  }, []);

  return { handleAPIErrors };
}
