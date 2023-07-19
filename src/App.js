import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LogIn";
import Register from "./pages/Register";
import Layout from "./pages/Layout";
import Hermes from "./pages/Hermes";
import PrivateRoutes from "./Routes/PrivateRoutes";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-primary text-white w-full h-screen">
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route
              path="/Hermes"
              element={
                <PrivateRoutes>
                  <Hermes />
                </PrivateRoutes>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
