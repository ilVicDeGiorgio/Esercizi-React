import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          throw new Error("Errore nel recupero degli utenti GitHub");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Lista degli utenti GitHub</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Aggiungi un Link per ogni utente */}
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      {/* Utilizza Outlet per rendere possibile la navigazione dei singoli utenti */}
      <Outlet />
    </div>
  );
}

export default GithubUserList;
