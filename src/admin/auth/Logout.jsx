import { useState } from "react";
import { useAuthContext } from "../../_contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const [loading, setLoading] = useState(false);
  const { logoutUser } = useAuthContext();
  const navigate = useNavigate();

  async function handleLogout() {
    setLoading(true);
    await logoutUser();
    navigate("/");
    setLoading(false);
  }
  return (
    <button
      onClick={handleLogout}
      disabled={loading == true}
      className={
        "px-5 font-thin text-dark-primary rounded-xl " +
        (loading ? "bg-slate-500" : "bg-light-green")
      }
    >
      Logout
    </button>
  );
}
