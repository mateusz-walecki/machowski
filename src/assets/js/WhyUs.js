import "../styles/whyUs.css";
import my1 from "../img/my-1.jpg";
import my2 from "../img/my-2.jpg";
import my3 from "../img/my-3.jpg";
import my4 from "../img/my-4.jpg";
import my5 from "../img/my-5.jpg";
import my6 from "../img/my-6.jpg";

const ImageTwo = () => (
  <div className="explanation">
    <span className="title">Dlaczego warto Nas wybrać ?</span>
    <div className="box1">
      <div className="box2">
        {/* <div className="box3"></div> */}
        <img src={my1} />
        <p className="description">
        Nasz zespół jest znany z doskonałej precyzji i dbałości o najmniejsze szczegóły w każdym projekcie. To właśnie te cechy pozwalają nam dążyć do perfekcji i osiągać wyjątkowe wyniki dla naszych klientów
        </p>
      </div>
      <div className="box2">
        {/* <div className="box3"></div> */}
        <img src={my2} />
        <p className="description">
        Nasza firma wyróżnia się dzięki swojej kreatywności i pomysłowości, które pomagają nam tworzyć unikalne projekty.
        </p>
      </div>
      <div className="box2">
        {/* <div className="box3"></div> */}
        <img src={my3} />
        <p className="description">
        Dzięki wieloletniemu doświadczeniu w projektowaniu i realizacji, jesteśmy w stanie uniknąć wielu typowych błędów. Nasza wiedza i praktyka pozwalają nam świadczyć usługi o najwyższej jakości, które przynoszą korzyści naszym klientom.
        </p>
      </div>
      <div className="box2">
        {/* <div className="box3"></div> */}
        <img src={my4} />
        <p className="description">
        Nasza firma oferuje kompleksową obsługę, co pozwala nam zająć się wszystkim za ciebie i zaoszczędzić twój cenny czas. Nasze usługi są zaprojektowane tak, aby ułatwić życie naszym klientom, pozostawiając im więcej czasu na inne ważne sprawy.
        </p>
      </div>
      <div className="box2">
        {/* <div className="box3"></div> */}
        <img src={my5} />
        <p className="description">
        Nasz profesjonalny stosunek do klienta jest kluczem do tworzenia przyjemnej atmosfery współpracy podczas pracy nad ich projektami
        </p>
      </div>
      <div className="box2">
        {/* <div className="box3"></div> */}
        <img src={my6} />
        <p className="description">
        Nasze usługi charakteryzują się doskonałym stosunkiem jakości do ceny, przy jednoczesnym zachowaniu wysokiej jakości. To pozwala naszym klientom cieszyć się satysfakcją z dokonanego rozsądnego wyboru
        </p>
      </div>
    </div>
  </div>
);

export default ImageTwo;
