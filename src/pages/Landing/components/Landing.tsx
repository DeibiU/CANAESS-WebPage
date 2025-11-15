import React from 'react';
import { Separator } from '../../Extras/components/Separator';
import Placeholder from '../../../assets/squarePlaceholder.jpg';

interface LandingProps {
  
}

const Landing = ({}: LandingProps) => {
  return (
    <div className="Landing">
      <Separator />
      <div id="content-box" className = "flex justify-center items-center flex-row">
        <text className="w-[75%]">
          info
        </text>
        <div id="separator" className = "w-0 h-0 border-r-[5vw] border-r-solid border-r-transparent border-t-[14vw] border-t-solid border-t-white margin-left" />
        <img src={Placeholder} alt='Placeholder' className="w-[25%]"/>
      </div>
      <Separator />
      <div id="content-box" className = "flex justify-center items-center flex-row">
        <img src={Placeholder} alt='Placeholder' className="w-[25%]"/>
        <div id="separator" className = "w-0 h-0 border-l-[5vw] border-l-solid border-l-transparent border-t-[14vw] border-t-solid border-t-white margin-left" />
        <text className="w-[75%]">
          info
        </text>
      </div>
      <Separator />
      <div id="content-box" className = "flex justify-center items-center flex-row">
        <text className="w-[75%]">
          info
        </text>
        <div id="separator" className = "w-0 h-0 border-r-[5vw] border-r-solid border-r-transparent border-t-[14vw] border-t-solid border-t-white margin-left" />
        <img src={Placeholder} alt='Placeholder' className="w-[25%]"/>
      </div>
      <Separator />
    </div>
  );
}

export { Landing };
