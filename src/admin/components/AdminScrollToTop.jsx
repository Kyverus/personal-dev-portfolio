import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AdminScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = document.querySelector(".flex-1.overflow-y-auto");
    if (container) container.scrollTop = 0;
  }, [pathname]);

  return null;
}
