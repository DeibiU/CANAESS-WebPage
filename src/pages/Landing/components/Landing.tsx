import React from "react";
import { Separator } from "../../Extras/components/Separator";
import Placeholder from "../../../assets/squarePlaceholder.jpg";
import { Link } from "react-router-dom";

interface LandingProps {}

const Landing = ({}: LandingProps) => {
  return (
    <div className="Landing">
      <Separator />
      <div
        id="content-box"
        className="flex inset-shadow-sm justify-center items-center flex-row"
      >
        <text className="w-[75%]">info</text>
        <div
          id="separator"
          className="w-0 h-0 border-r-[5vw] border-r-solid border-r-transparent border-t-[14vw] border-t-solid border-t-white margin-left"
        />
        <img
          src={Placeholder}
          alt="Placeholder"
          className="w-[25%] rounded-bl-[60%] rounded-tl-[10%]"
        />
      </div>
      <Separator />
      <div
        id="content-box"
        className="flex justify-center items-center flex-row"
      >
        <img
          src={Placeholder}
          alt="Placeholder"
          className="w-[25%] rounded-br-[60%] rounded-tr-[10%]"
        />
        <div
          id="separator"
          className="w-0 h-0 border-l-[5vw] border-l-solid border-l-transparent border-t-[14vw] border-t-solid border-t-white margin-left"
        />
        <text className="w-[75%]">info</text>
      </div>
      <Separator />
      <div
        id="content-box"
        className="flex justify-center items-center flex-row"
      >
        <Link className="w-[75%]" to={"/history"}>
          info
        </Link>
        <div
          id="separator"
          className="w-0 h-0 border-r-[5vw] border-r-solid border-r-transparent border-t-[14vw] border-t-solid border-t-white margin-left"
        />
        <img
          src={Placeholder}
          alt="Placeholder"
          className="w-[25%] rounded-bl-[60%] rounded-tl-[10%]"
        />
      </div>
      <Separator />
    </div>
  );
};

export { Landing };
