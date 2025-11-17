import React from 'react';

interface FooterProps {
  
}

const Footer = ({}: FooterProps) => {
  return (
    <div className="Footer bg-canaess-200 p-10">
      <div id="orgInfo ">
        <text className="text-2xl text-white">Footer, information here</text>
      </div>
      <div id="orgLogos">

      </div>
    </div>
  );
}

export { Footer };
