import "./App.css";
import React from "react";
import ImageOne from "./assets/js/ImageOne";
import ImageTwo from "./assets/js/ImageTwo";
import SmallGallery from "./assets/js/SmallGallery";
import ImageThree from "./assets/js/ImageThree";
import TextBox from "./assets/js/TextBox";
import WhyUs from "./assets/js/WhyUs";

function App() {
  return (
    <body>
      <main class="main">
       
        <section >
          <ImageOne />
          <WhyUs />          
          <ImageTwo />
          <SmallGallery />
          <ImageThree />
          <TextBox />
        </section>
      </main>
    </body>
  );
}

export default App;
