import React from "react";
import googleLogo from "../../Assets/Img/google.png";
import { Link } from "react-router-dom";

export default function FormLogin() {
  return (
    <>
      <div className="flex min-h-full justify-center px-4 items-center sm:px-6 lg:px-8 bg-[#FCFCFC] ">
        <div className="w-full max-w-md">
          <div className="flex flex-col justify-center items-center space-y-6">
            <h1 className="text-6xl font-bold">Hi There!</h1>
            <h3 className="text-2xl font-semibold">Welcome to Codex</h3>
            <button
              type="submit"
              className=" relative flex w-full justify-center rounded-lg bg-white px-3 py-2 text-sm font-light text-[#444444]  transition duration-300  border-[0.1px] mb-4 border-gray-400 hover:scale-105"
            >
              <span className=" inset-y-0 left-0 flex items-center pl-3">
                {/* <LockClosedIcon className="h-5 w-5 text-orange-500 group-hover:text-orange-400" aria-hidden="true" /> */}
                <img className="h-5 w-5 mx-3" src={googleLogo} alt="google" />
              </span>
              LogIn in with Google
            </button>
          </div>
          <div>
            <h3 className="m-3 font-semibold">OR</h3>
          </div>
          <form className="space-y-6">
            <div className="rounded-md shadow-sm relative">
              <div>
                <label className="text-md block text-left" htmlFor="user">
                  User:
                </label>
                <input
                  id="user"
                  type="text"
                  required
                  autoComplete="off"
                  className="relative w-full rounded-md py-1 text-gray-500 border-[0.1px] border-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6  pl-2"
                  placeholder="Ej: Mampe vende chispita"
                />
              </div>
              <div className="mt-8">
                <label className="block text-left" htmlFor="password">
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="off"
                  required
                  className="relative block w-full rounded-md py-1 text-gray-500 border-[0.1px] border-gray-400 placeholder:text-gray-400  sm:text-sm sm:leading-6  pl-2"
                  placeholder="●●●●●●●●"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-6">
                <div className="flex items-center mb-4">
                  <input
                    id="checkbox"
                    className="border-[#B7B7B7] mr-2"
                    type="checkbox"
                  />
                  <label
                    htmlFor="checkbox"
                    className="text-sm  text-[#B7B7B7] "
                  >
                    remember me for 30 days
                  </label>
                </div>
                <div>
                  <p className=" text-sm text-[#60CBD3] cursor-pointer hover:text-[#34A5AD] duration-300 ">
                    Forgot Password?
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-light text-white hover:bg-[#00CAC8] transition duration-300  mb-4 hover:scale-105"
              >
                Ingresar
              </button>
              <div className="flex justify-center">
                <div className="flex items-center mb-4 text-sm ">
                  <label htmlFor="checkbox" className=" text-[#B7B7B7] ">
                    You do not have an account?
                  </label>
                  <Link to="/Register">
                    <span className="text-[#60CBD3]  ml-2 cursor-pointer hover:text-[#34A5AD] duration-300 ">
                      Sign Up
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}