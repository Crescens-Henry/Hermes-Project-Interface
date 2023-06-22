import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hermes from "./pages/Hermes";
import Login from "./pages/LogIn";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/Hermes" Component={Hermes} />
            <Route exact path="/Login" Component={Login} />
            <Route exact path="/Register" Component={Register} />
            <Route exact path="/AboutUs" Component={AboutUs} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
