import React from "react";
import "../Extras.css";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

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
        <BiSolidLeftArrow />
      </button>

      <div>
        <h2>{item.title}</h2>
        <h4>{item.subtitle}</h4>
        <p>{item.info}</p>
      </div>

      <button
        onClick={() =>
          shownItemIndex !== carouselData.length - 1 &&
          setShownItemIndex((prev) => prev + 1)
        }
      >
        <BiSolidRightArrow />
      </button>
    </div>
  );
};

export { Carousel };
