import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyPortfolio from "./pages/MyPortfolio";
import ContactList from "./components/ContactList";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <MyPortfolio />
      <ContactList />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
