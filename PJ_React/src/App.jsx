import Container from "./components/Container";
import Clock from "./components/Clock";
import LanguageContext from "./LenguageContext";
import { useState } from "react";
// import GitHubUser from "./components/GitHubUser";
import GHT2 from "./components/GHT2";

function App() {
  const [language, setSelectLanguage] = useState("en");

  return (
    <Container>
      <LanguageContext.Provider value={language}>
        <Clock></Clock>
      </LanguageContext.Provider>
      <GHT2></GHT2>
    </Container>
  );
}

export default App;
