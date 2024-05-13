import { useState } from "react";
import UseCustomHook from "./UseCustomHook"; // Importiamo il custom hook
import GitHubUser from "./GitHubUser";

function GHT2() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const { userData, loading, error } = UseCustomHook(searchQuery); // Usiamo il custom hook

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Non è più necessario gestire la logica di ricerca qui
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {/* Non abbiamo più bisogno della mappatura qui */}
        {/* GitHubUser si prenderà cura del recupero dei dati e della resa */}
        <li>
          <GitHubUser username={searchQuery} />
        </li>
      </ul>
    </div>
  );
}

export default GHT2;
