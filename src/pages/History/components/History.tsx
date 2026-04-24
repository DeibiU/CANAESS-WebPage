import React, { useRef, useState } from "react";
import "../History.css";
import { Carousel } from "../../Extras/components/Carousel";

interface HistoryProps {}

const History = ({}: HistoryProps) => {
  const carosuleData = useRef([
    {
      title: "Título 1",
      subtitle: "Subtítulo 1",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "url",
    },
    {
      title: "Título 2",
      subtitle: "Subtítulo 2",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "url",
    },
    {
      title: "Título 3",
      subtitle: "Subtítulo 3",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "url",
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
