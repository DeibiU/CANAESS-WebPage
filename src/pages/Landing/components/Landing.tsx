import React from 'react';
import { Separator } from '../../Extras/components/Separator';

interface LandingProps {
  
}

const Landing = ({}: LandingProps) => {
  return (
    <div className="Landing">
            <Separator />
      <div id="content-box" className = "flex flex-row">
        <text>
          info
        </text>
        <div id="separator" className = "w-0 h-0 border-r-[5vw] border-r-solid border-r-transparent border-t-[14vw] border-t-solid border-t-white margin-left" />
        <img src='' alt='Image'/>
      </div>
      <Separator />
      <div>
        <img src='' alt='Image'/>
              <div id="separator" className = "w-0 h-0 border-l-[5vw] border-l-solid border-l-transparent border-t-[14vw] border-t-solid border-t-white margin-left" />
        <text>
          info
        </text>
      </div>
            <Separator />
      <div>
        <text>
          info
        </text>
        <div id="separator" className = "w-0 h-0 border-r-[5vw] border-r-solid border-r-transparent border-t-[14vw] border-t-solid border-t-white margin-left" />
        <img src='' alt='Image'/>
      </div>
            <Separator />
    </div>
  );
}

export { Landing };
