import { Parallax } from "react-parallax";
import backgroundTwo from "../img/2.jpg";

const ImageTwo = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={backgroundTwo}
    strength={400}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content2">
      <span className="img-txt2">
        OFERUJEMY KOMPLEKSOWE USŁUGI PROJEKTOWO-DORADCZE W ZAKRESIE
        KONSTRUOWANIA ORAZ PRODUKCJI POJAZDÓW UŻYTKOWYCH ORAZ KONSTRUKCJI
        STALOWYCH
      </span>
    </div>
  </Parallax>
);

export default ImageTwo;
