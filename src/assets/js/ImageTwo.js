import { Parallax } from "react-parallax";
import backgroundTwo from "../img/2.jpg";

const ImageTwo = () => (
  <Parallax
    className="image2"
    blur={0}
    bgImage={backgroundTwo}
    strength={400}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div id="offer">
      <div className="content2">
        {/* <span className="titleImageTwo">OFERTA</span> */}
        <span className="img-txt2">
          OFERUJEMY KOMPLEKSOWE USŁUGI PROJEKTOWO-DORADCZE W ZAKRESIE
          KONSTRUOWANIA ORAZ PRODUKCJI POJAZDÓW UŻYTKOWYCH ORAZ KONSTRUKCJI
          STALOWYCH
        </span>
      </div>
    </div>
  </Parallax>
);

export default ImageTwo;
