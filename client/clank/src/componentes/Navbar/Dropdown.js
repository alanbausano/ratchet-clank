import React from "react";
import { Link as Linker } from "react-scroll";

export default function Dropdown(props) {
  return (
    <ul className="dropdown-item">
      <Linker to="ps5" spy={true} smooth={true} offset={-10} duration={500} onClick={() => props.setMostrarDrop(!props.mostrarDrop)}>
        <li className="nav-item">PlayStation 5</li>
      </Linker>
      <Linker to="ps4" spy={true} smooth={true} offset={-10} duration={500} onClick={() => props.setMostrarDrop(!props.mostrarDrop)}>
        <li className="nav-item">PlayStation 4</li>
      </Linker>
      <Linker to="ps3" spy={true} smooth={true} offset={-10} duration={500} onClick={() => props.setMostrarDrop(!props.mostrarDrop)}>
        <li className="nav-item">PlayStation 3</li>
      </Linker>
      <Linker to="ps3" spy={true} smooth={true} offset={-10} duration={500} onClick={() => props.setMostrarDrop(!props.mostrarDrop)}>
        <li className="nav-item">PlayStation 2</li>
      </Linker>
    </ul>
  );
}
