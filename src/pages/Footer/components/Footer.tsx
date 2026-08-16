import React from 'react';
import facebookLogo from "../../../assets/icons/facebook.svg";
import instagramLogo from "../../../assets/icons/instagram.svg" 

interface FooterProps {

}

const Footer = ({}: FooterProps) => {
  const socialLinks = [
    { src: facebookLogo, href: '#', label: 'Facebook' },
    { src: instagramLogo, href: '#', label: 'Instagram' }
  ];

  return (
    <div className="Footer bg-canaess-200 px-25 py-10 flex items-center justify-evenly flex-wrap gap-6">
      <div id="orgInfo" className="flex text-start flex-col gap-1 text-white">
        <p className="text-sm">
          <span className="font-semibold">Directora Ejecutiva:</span> Licda. Jessica Brenes Jiménez
        </p>
        <p className="text-sm">
          <span className="font-semibold">Dirección Ejecutiva:</span> Brenda.hidalgo@canaess.info
        </p>
        <p className="text-sm">
          <span className="font-semibold">Teléfono:</span> 8992-8419
        </p>
        <p className='text-sm'>
          © 2026 CANAESS, Todos los derechos reservados.
        </p>
      </div>

      <div id="orgLogos" className="flex items-center gap-4">
        {socialLinks.map(({ src, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:opacity-70 transition-opacity"
          >
            <img src={src} alt={label} className="w-12 h-12 brightness-0 invert" />
          </a>
        ))}
      </div>
    </div>
  );
};

export { Footer };