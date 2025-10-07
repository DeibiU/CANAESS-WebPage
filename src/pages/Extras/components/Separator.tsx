import React from 'react';

interface SeparatorProps {
  
}

const Separator = ({}: SeparatorProps) => {
  return (
    <div className="Separator bg-canaess-500">
       <div id="separator" className = "w-[25vw] h-0 border-r-[2vw] border-r-solid border-r-transparent border-t-[2.5vw] border-t-solid border-t-canaess-1000 margin-left" />
    </div>
  );
}

export { Separator };