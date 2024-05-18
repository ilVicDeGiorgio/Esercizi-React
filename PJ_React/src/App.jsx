import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="Vittorio" />} />
      </Routes>
    </Router>
  );
}

export default App;
