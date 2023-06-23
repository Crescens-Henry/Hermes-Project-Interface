import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Hermes">Hermes</Link>
          </li>
          <li>
            <Link to="AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="LogIn">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
