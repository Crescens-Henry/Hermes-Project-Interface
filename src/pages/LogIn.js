import React from "react";
import Logo from "./../Assets/Img/codex.png";
import ImgComponent from "./../Assets/Img/astronautaoriginalepic.jpeg";
import FormLogin from "../components/atoms/FormLogin";

export default function LogIn() {
  return (
    <>
      <div className="bg-white min-h-screen flex font-global">
        {/* Logo en la esquina superior izquierda */}
        <div className="absolute top-0 left-0 p-4">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>
        {/* Sección izquierda */}
        <div className="w-1/2 text-black text-center">
          {/* Contenido adicional */}
          <FormLogin />
        </div>
        {/* Sección derecha */}
        <div className="w-1/2  flex items-center">
          <img
            src={ImgComponent}
            alt="ImgComponent"
            className=" w-full h-full object-cover object-center items-center"
          />
        </div>
      </div>
    </>
  );
}
