import React, { useRef, useState } from "react";
import "../History.css";
import Picture1 from "../../../assets/CanaessLogo.png";
import Picture2 from "../../../assets/images/ley-10859.png";
import Picture3 from "../../../assets/images/feria-nacional.jpeg";
import { Carousel } from "../../Extras/components/Carousel";

interface HistoryProps {}

const History = ({}: HistoryProps) => {
const carosuleData = useRef([
    {
      title: "Nuestros orígenes",
      subtitle: "Fundada en julio de 2015",
      info: "CANAESS nació por iniciativa de cinco líderes de distintas organizaciones de la economía social solidaria, con el fin de articular y representar al sector ESS en Costa Rica.",
      image: Picture1,
    },
    {
      title: "Ley N.º 10859",
      subtitle: "Un paso histórico para el sector, 2025",
      info: "Celebramos la publicación de la Ley para Organizaciones Socioproductivas de la Economía Social Solidaria, que reconoce legalmente a cooperativas, asociaciones, fundaciones y demás modelos asociativos del país.",
      image: Picture2,
    },
    {
      title: "Ferias y foros anuales",
      subtitle: "Espacios que visibilizan al sector",
      info: "Cada año realizamos la Feria de Mujeres de ESS y la Feria Nacional de Empresas de la ESS, que reúne a más de 200 organizaciones de todo el país, junto con foros de diálogo y capacitación.",
      image: Picture3,
    },
  ]);
  const [shownItemIndex, setShownItemIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center gap-9 py-7 w-screen">
      <h1 className="text-canaess-500 text-3xl font-bold pr-96">
        Nuestra Historia
      </h1>
      <Carousel
        shownItemIndex={shownItemIndex}
        setShownItemIndex={setShownItemIndex}
        carouselData={carosuleData.current}
      />
    </div>
  );
};

export { History };
