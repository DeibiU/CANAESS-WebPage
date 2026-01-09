import React from 'react';
import Logo from '../../../assets/CanaessLogo.png';
import '../Header.css';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <div className="max-w-screen-lg mx-auto py-10">
      <Link to="/">
      <img alt='Logo' src={Logo} className='mx-auto'/></Link>
    </div>
  );
};

export { Header };
