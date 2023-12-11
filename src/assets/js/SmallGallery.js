import React from "react";
import "../styles/smallGallery.css";
import truck from "../img/truck.jpg";
import my2 from "../img/idea.svg";
import my3 from "../img/error.svg";
import my4 from "../img/checklist.svg";
import my5 from "../img/handshake.svg";
import my6 from "../img/shoppingmode.svg";

const TextBox = () => {
  return (
    <div className="text-box">
      <h3>Nasza oferta i zdjęcia z realizacji</h3>
      <div id="smallGallery">
        <div className="firstBox">
          <div className="secondBox">
            <img className="inside" src={truck} alt="truck" />
            <p className="description">POJAZDY UŻYTKOWE</p>
          </div>
          <div className="secondBox">
            {/* <div className="box3"></div> */}
            <img className="inside" src={my2} />
            <p className="description">KONSTRUKCJE STALOWE</p>
          </div>
          <div className="secondBox">
            {/* <div className="box3"></div> */}
            <img className="inside" src={my3} />
            <p className="description">URZĄDZENIA PRZEMYSŁOWE</p>
          </div>
          <div className="secondBox">
            {/* <div className="box3"></div> */}
            <img className="inside" src={my4} />
            <p className="description">SPRZĘT ROLNICZY</p>
          </div>
          <div className="secondBox">
            {/* <div className="box3"></div> */}
            <img className="inside" src={my5} />
            <p className="description">ANALIZY WYTRZYMAŁOŚCIOWE</p>
          </div>
          <div className="secondBox">
            {/* <div className="box3"></div> */}
            <img className="inside" src={my6} />
            <p className="description">DORADZTWO TECHNICZNE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
