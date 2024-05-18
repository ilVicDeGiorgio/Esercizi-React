import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="Vittorio" />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
