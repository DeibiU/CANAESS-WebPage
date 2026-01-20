import React from 'react';
import '../AboutUs.css';
import ProfilePanels from './ProfilePanels/Profile';
import { Separator } from '../../Extras/components/Separator';
import { Carousel } from '../../Extras/components/Carousel';

interface AboutUsProps {
  
}

const AboutUs = ({}: AboutUsProps) => {
  return (
    <div className="AboutUs">
      <Separator/>
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
      <Separator/>
    </div>
  );
}

export { AboutUs };
