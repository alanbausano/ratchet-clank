import React from "react";
import { Link } from "react-router-dom";
import logo from "../../imagenes/ratchet.png";

export default function NavLogo() {
  return <Link to='/'><img src={logo} alt="logo" className="logo"></img></Link>;
}
