import "./App.css";
import { Header } from "./pages/Header/components/Header";
import { Footer } from "./pages/Footer/components/Footer";
import React from "react";
import { Outlet } from "react-router";
import { Separator } from "./pages/Extras/components/Separator";

function App() {
  return (
    <div className="App">
      <Header />
      <Separator />
      <Outlet />
      <Separator />
      <Footer />
    </div>
  );
}

export default App;
