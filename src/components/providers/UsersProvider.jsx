import { useEffect, useState } from "react";
import { UsersContext } from "../../context/Users";

function UsersProvider({ children }) {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])

    useEffect(() => {
      localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

  return (
    <UsersContext.Provider
      value={{
        setUsers,
        users,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;