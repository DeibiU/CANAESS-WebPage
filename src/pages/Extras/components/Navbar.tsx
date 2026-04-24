import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

interface NavbarProps {
  
}

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;

  const isHDR= false;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);

  return width > breakpoint ? !isHDR : isHDR;
};

const Navbar = ({}: NavbarProps) => {
  return (
    <div className="Navbar bg-canaess-200 p-4">
      <div id="sites" className="flex space-between gap-[4%] max-sm:flex-col max-sm:gap-2 items-center justify-center">
        <Link to="/AboutUs" className="text-xl text-canaess-500 hover:text-canaess-800 hover:animate-pulse">Sobre Nosotros</Link>
        {App() && (<text className="text-white " >|</text>)}
        <Link to="/History" className="text-xl text-canaess-500 hover:text-canaess-800 hover:animate-pulse">Historia</Link>
        {App() && (<text className="text-white">|</text>)}
        <Link to="/Documents" className="text-xl text-canaess-500 hover:text-canaess-800 hover:animate-pulse">Documentos de Interés</Link>
        {App() && (<text className="text-white">|</text>)}
        <Link to="/Form" className="text-xl text-canaess-500 hover:text-canaess-800 hover:animate-pulse">Pagina de Afiliación</Link>
      </div>
    </div>
  );
}

export { Navbar };