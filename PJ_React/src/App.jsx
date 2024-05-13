import GHT2 from "./components/GHT2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>TITOLO HOMEPAGE</h1>} />
        <Route path="/github" element={<GHT2></GHT2>} />
        <Route path="/button" element={<button>BOTTONE MERAVIGLIOSO</button>} />
      </Routes>
    </Router>
  );
}

export default App;
