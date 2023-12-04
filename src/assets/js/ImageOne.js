import { Parallax } from "react-parallax";
import backgroundOne from "../img/1.jpg";
import Navbar from "./Navbar";

const ImageOne = () => (
  <Parallax
    className="image"
    blur={0}
    bgImage={backgroundOne}
    strength={400}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <Navbar />
    <div className="content">
      <span className="img-txt">
        PROJEKTOWANIE ORAZ PRODUKCJA:
        <ul>
          <li className="list">POJAZDÓW UŻYTKOWYCH</li>
          <li className="list">KONSTRUKCJI STALOWYCH</li>
          <li className="list">OPRZYRZĄDOWANIA ORAZ URZĄDZEŃ DLA PRZEMYSŁU </li>
        </ul>
      </span>
    </div>
  </Parallax>
);

export default ImageOne;
