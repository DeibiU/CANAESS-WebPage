import './App.css';
import { Header } from './pages/Header/components/Header';
import { Footer } from './pages/Footer/components/Footer';
import React from 'react';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
    <Header />
    <Outlet />
    <Footer />
    </div>
  );
}

export default App;
