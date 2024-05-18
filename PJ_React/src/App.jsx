import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import ShowGithubUser from "./components/ShowGithubUser";
import Counter from "./components/Counter";
import NotFound from "./components/NotFound";
import GithubUserList from "./components/GithubUserList";
import AddUserMessage from "./components/AddUserMessage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<Welcome name="Vittorio" />} />
        <Route
          path="/user"
          element={<ShowGithubUser username={"ilVicDeGiorgio"} />}
        />
        <Route path="/Counter" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/users" element={<GithubUserList />}>
          {/* Aggiungi una nuova route nidificata per il componente ShowGithubUser */}
          <Route index element={<AddUserMessage />} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>

      <Link to="/counter">
        <p>Counter</p>
      </Link>
      <Link to="/user">
        <p>ShowGithubUser</p>
      </Link>
      <Link to="/welcome">
        <p>Welcome!</p>
      </Link>
    </Router>
  );
}

export default App;
