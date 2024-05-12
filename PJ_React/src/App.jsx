import Container from "./components/Container";
import Clock from "./components/Clock";
import LanguageContext from "./LenguageContext";
import { useState } from "react";
import GitHubUser from "./components/GitHubUser";

function App() {
  const [collapse, setCollapse] = useState(false);
  const [language, setSelectLanguage] = useState("en");

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const handleSelectLanguage = (e) => {
    setSelectLanguage(e.target.value);
    console.log(language);
  };
  return (
    <Container
      title={
        <div>
          <h1>Titolo nel container</h1>{" "}
          <button onClick={handleCollapse}>Mostra/Non mostrare</button>
        </div>
      }
    >
      <LanguageContext.Provider value={language}>
        <select value={language} onChange={handleSelectLanguage} name="" id="">
          <option value="it">IT</option>
          <option value="en">EN</option>
        </select>
        <Clock></Clock>
        {collapse && (
          <div>
            <p>Corpo del container</p>
            <img
              src="https://loremipsum.io/assets/images/lorem-ipsum-generator-custom-placeholder-text.jpg"
              alt=""
              height="300px"
            />
            <br />
            <cite>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              nemo earum nam ipsa? Aut molestias aliquam numquam debitis magni
              fugit voluptatibus maxime esse? Tenetur, similique nobis.
              Exercitationem debitis consequatur ab! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Harum vel voluptatum atque voluptate
              omnis ex obcaecati quisquam nihil sunt. Totam eaque temporibus at,
              tenetur magni magnam nemo labore eius praesentium.
            </cite>
          </div>
        )}
      </LanguageContext.Provider>
      <GitHubUser username={"ilVicDeGiorgio"}></GitHubUser>
    </Container>
  );
}

export default App;
