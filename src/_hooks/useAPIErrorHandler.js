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

    if (response.status >= 500) {
      console.error("Server error:", error.response?.data || error);
    } else if (response.status >= 400 && response.status < 500) {
      toast.error(error.response?.data || "An error occurred");
    } else {
      console.warn("Unexpected response status:", status);
    }

    return false;
  }, []);

  return { handleAPIErrors };
}
