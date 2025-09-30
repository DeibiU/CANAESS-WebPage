import Logo from '../../../assets/CanaessLogo.png';
import '../Header.css';

interface HeaderProps {
  
}

const Header = ({}: HeaderProps) => {
  return (
    <div className="Header">
      <img src={Logo}></img>
    </div>
  );
}

export { Header };
