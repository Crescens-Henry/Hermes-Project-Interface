import React from "react";
import Logo from "./../Assets/Img/codex.png";
import ImgComponent from "./../Assets/Img/astronautaEpic.jpg";
import FormRegister from "./../components/atoms/FormRegister";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="bg-white min-h-screen flex font-global">
        {/* Logo en la esquina superior izquierda */}
        <div className="absolute top-0 right-0 p-4">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="h-16" />
          </Link>
        </div>
        {/* Sección izquierda */}
        <div className="w-1/2 flex items-center">
          <img
            src={ImgComponent}
            alt="ImgComponent"
            className="w-full h-full object-cover object-center items-center"
          />
        </div>
        <div className="w-1/2 text-black text-center">
          <FormRegister />
        </div>
      </div>
    </>
  );
}
