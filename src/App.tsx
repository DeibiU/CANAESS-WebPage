import './App.css';
import { Header } from './pages/Header/components/Header';
import { Footer } from './pages/Footer/components/Footer';
import { Landing } from './pages/Landing/components/Landing';
import { AboutUs } from './pages/AboutUs/components/AboutUs';

function App() {
  return (
    <div className="App">
    <Header />
    <Landing />
    <AboutUs />
    <Footer />
    </div>
  );
}

export default App;
