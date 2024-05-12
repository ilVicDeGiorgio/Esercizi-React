import Container from "./components/Container";
import { useState } from "react";

function App() {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nemo
            earum nam ipsa? Aut molestias aliquam numquam debitis magni fugit
            voluptatibus maxime esse? Tenetur, similique nobis. Exercitationem
            debitis consequatur ab! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Harum vel voluptatum atque voluptate omnis ex
            obcaecati quisquam nihil sunt. Totam eaque temporibus at, tenetur
            magni magnam nemo labore eius praesentium.
          </cite>
        </div>
      )}
    </Container>
  );
}

export default App;
