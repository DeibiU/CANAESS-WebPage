import React from "react";
import { Separator } from "../../Extras/components/Separator";
import Placeholder from "../../../assets/squarePlaceholder.jpg";
import Graph from "../../../assets/images/Grafico conceptual.png";
import Team from "../../../assets/images/Picture6.jpg";
import Graph2 from "../../../assets/images/Grafico de integracion.png";
import Asociations from "../../../assets/images/socios.png";
import { Link } from "react-router-dom";

interface LandingProps {}

const Landing = ({}: LandingProps) => {
  return (
    <div className="Landing">
      <div
        id="content-box"
        className="flex inset-shadow-sm justify-center items-center flex-row"
      >
        <div>
        <h4 className="text-canaess-500 text-xl text-left font-bold pb-5">
        Sobre CANAESS
        </h4>
        <text className="w-[75%] max-w-1">Somos la Cámara Nacional de Economía Social Solidaria, que representa y genera visibilidad a las empresas de la economía social solidaria desde el sector privado.</text>
        </div>
        <div
          id="separator"
          className="w-0 h-0 border-r-[5vw] border-r-solid border-r-transparent border-t-[14vw] border-t-solid border-t-white margin-left"
        />
        <img
          src={Team}
          alt="Placeholder"
          className="w-[25%] rounded-bl-[60%] rounded-tl-[10%] object-contain"
        />
      </div>
      <Separator />
      <div
        id="content-box"
        className="flex justify-center items-center flex-row"
      >
        <img
          src={Graph}
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
          src={Asociations}
          alt="Placeholder"
          className="w-[25%] rounded-bl-[60%] rounded-tl-[10%]"
        />
      </div>
    </div>
  );
};

export { Landing };
