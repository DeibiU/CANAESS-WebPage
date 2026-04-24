import React from "react";
import "../Extras.css";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import Placeholder from "../../../assets/squarePlaceholder.jpg";

interface CarouselItem {
  title: string;
  subtitle: string;
  info: string;
  image: string;
}

interface CarouselProps {
  shownItemIndex: number;
  setShownItemIndex: (newIndex: number | ((prev: number) => number)) => void;
  carouselData: CarouselItem[];
}

const Carousel = ({
  shownItemIndex,
  setShownItemIndex,
  carouselData,
}: CarouselProps) => {
  const item = carouselData[shownItemIndex];

  return (
    <div className="flex justify-center items-center gap-9 py-7 w-screen">
      <button
        onClick={() =>
          shownItemIndex !== 0 && setShownItemIndex((prev) => prev - 1)
        }
      >
        <BiSolidLeftArrow className="text-canaess-500"/>
      </button>

      <div className="w-[70%] bg-slate-50 p-8 rounded-xl shadow-xl">
        <h2 className="text-canaess-700 text-3xl font-semibold text-left">{item.title}</h2>
        <h4 className="text-left pl-5 py-4">{item.subtitle}</h4>
        <div id="content-box" className="flex inset-shadow-sm justify-center items-center flex-row">
          <img
          src={Placeholder}
          alt={item.title}
          className="w-[25%] rounded-[5%] rounded-br-[60%]"
          />
          <p className="p-4">{item.info}</p>
        </div>
      </div>

      <button
        onClick={() =>
          shownItemIndex !== carouselData.length - 1 &&
          setShownItemIndex((prev) => prev + 1)
        }
      >
        <BiSolidRightArrow  className="text-canaess-500"/>
      </button>
    </div>
  );
};

export { Carousel };
