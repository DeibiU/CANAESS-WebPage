import React from 'react';
import '../AboutUs.css';
import ProfilePanels from './ProfilePanels/Profile';
import { Separator } from '../../Extras/components/Separator';
import { Carousel } from '../../Extras/components/Carousel';

interface AboutUsProps {
  
}

const AboutUs = ({}: AboutUsProps) => {
  return (
    <div className="AboutUs py-5">
      <h1 className="text-canaess-500 text-3xl font-bold pb-5 pr-96">
        Sobre Nosotros
      </h1>
      <div className="px-[1%] py-[5px] gap-y-[10px]">
        <div className="flex gap-[1%] py-[5px]">
          <ProfilePanels/>
          <ProfilePanels/>
        </div>
        <div className="flex gap-[1%] py-[5px]">
          <ProfilePanels/>
          <ProfilePanels/>
        </div>
        <div className="flex gap-[1%] py-[5px]">
          <ProfilePanels/>
          <ProfilePanels/>
        </div>
      </div>
    </div>
  );
}

export { AboutUs };
