import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/Home Page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Members from "./components/pages/Members Page";
import History from "./components/pages/History Page";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/members" element={<Members />}/>
          <Route path="/history" element={<History />}/>
          <Route path="*" element={<HomePage />}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
