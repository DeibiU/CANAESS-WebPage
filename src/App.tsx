import "./App.css";
import { Header } from "./pages/Header/components/Header";
import { Footer } from "./pages/Footer/components/Footer";
import React from "react";
import { Outlet } from "react-router";
import { Separator } from "./pages/Extras/components/Separator";
import { Navbar } from "./pages/Extras/components/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Separator />
      <Outlet />
      <Separator />
      <Footer />
    </div>
  );
}

export default App;
