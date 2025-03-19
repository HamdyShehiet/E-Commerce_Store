import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
    console.log(LoggedInUser);
    if (LoggedInUser) {
      setUser(LoggedInUser);
    } else {
      console.log("You are not Loggeg In ")
      navigate("/login");
    }
  }, []);

  return <>{user && <h1 className="text-4xl">Hello {user.name || "User"} Account</h1>}</>;
}
export default Account;
