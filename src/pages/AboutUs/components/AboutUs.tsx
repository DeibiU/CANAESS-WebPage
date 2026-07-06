import React from 'react';
import '../AboutUs.css';
import ProfilePanels from './ProfilePanels/Profile';
import { Separator } from '../../Extras/components/Separator';
import { Carousel } from '../../Extras/components/Carousel';
import Values from "../../../assets/images/Grafico de valores.png";

interface AboutUsProps {
  
}

const AboutUs = ({}: AboutUsProps) => {
  return (
    <div className="AboutUs py-7 px-[10%] max-sm:px-2">
      <h1 className="text-canaess-500 max-sm:pl-4 text-3xl font-bold pb-3 pr-96">
        Sobre Nosotros
      </h1>
      <div className="px-[10%] py-[5px] gap-y-[10px] mb-20 flex-col justify-center">
        <div className="flex gap-[1%] py-[5px] max-sm:flex-col max-sm:gap-y-[10px]">
          <ProfilePanels Role={'Presidente'} member={'Lic. Gustavo Bonilla Murillo'}/>
          <ProfilePanels Role={'Vicepresidente'} member={'Lic. Carlos Montero Jiménez'}/>
        </div>
        <div className="flex gap-[1%] py-[5px] max-sm:flex-col max-sm:gap-y-[10px]">
          <ProfilePanels Role={'Tesorero'} member={'Lic. Rodrigo Zamora Murillo'}/>
          <ProfilePanels Role={'Secretaio'} member={'Sr. Bernardo Rodríguez Rodríguez'}/>
        </div>
        <div className="flex gap-[1%] py-[5px] max-sm:flex-col max-sm:gap-y-[10px]">
          <ProfilePanels Role={'Vocal'} member={'Licda. Karla Corrales Araya'}/>
          <ProfilePanels Role={'Suplente'} member={'Licda. Zaida María Acuña Prado'}/>
        </div>
        <div className="flex gap-[1%] py-[5px] max-sm:flex-col max-sm:gap-y-[10px]">
          <ProfilePanels Role={'Fiscal'} member={'Sra. María Isabel Ramírez Castro'}/>
          <ProfilePanels Role={'Directora Ejecutiva'} member={'Licda. Jessica Brenes Jiménez'}/>
        </div>
      </div>
      <h1 className="text-canaess-500 max-sm:pl-4 text-3xl font-bold pb-5 pr-96">
        Nuestros Valores
      </h1>
      <img
        src={Values}
        alt="Placeholder"
        className="border-[6px] mx-[25%] w-[50%] h- border-[#ffb200] rounded-[60%] aspect-square object-contain"
      />
    </div>
  );
}

export { AboutUs };
