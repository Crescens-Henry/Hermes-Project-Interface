import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hermes from "./pages/Hermes";
import Login from "./pages/LogIn";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-black text-white w-full h-screen overflow-hidden">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/Hermes" element={<Hermes />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
