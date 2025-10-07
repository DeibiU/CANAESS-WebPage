import React from 'react';
import Logo from '../../../assets/CanaessLogo.png';
import '../Header.css';

interface HeaderProps {
  
}

const Header = ({}: HeaderProps) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <img alt='Logo' src={Logo} className='mx-auto'/>
    </div>
  );
}

export { Header };
