import UseCustomHook from "./UseCustomHook";

function GithubUser({ username }) {
  const { userData, loading, error } = UseCustomHook(username); // Utilizza il custom hook per recuperare i dati

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div>
      <h2>Name: {userData.name}</h2>
      <p>Login: {userData.login}</p>
      <img src={userData.avatar_url} alt="User Avatar" />
    </div>
  );
}

export default GithubUser;
