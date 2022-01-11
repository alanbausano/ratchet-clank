import React, { useState } from "react";
import NavLogo from "./NavLogo";
import { useTransition, animated } from "react-spring";
import Menu from "./Menu";

export default function NavbarMobile() {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  
  const handleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  }
  const transition = useTransition(mostrarMenu, {
    from: { x: 0, y: -410, opacity:0, transition: "all ease 0.05s", position:'absolute', 'zIndex':3, width:'100%' },
    enter: { x: 0, y: 0, opacity:1, transition: "all ease 0.05s", position:'absolute', 'zIndex':3, width:'100%' },
    leave: { x: 0, y: -410, opacity:0, transition: "all ease 0.05s" },
  });
  return (
    <nav className="nav-container" id='main'>
      <div className="bar-container">
        <NavLogo />
        <div className="icono-menu">
          <button onClick={handleMenu}>
            <i className={mostrarMenu ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </div>
      <div className='menu-m-container'>
        {transition((style, item) =>
          item ? (
            <animated.div style={style}>
              <Menu cerrarMenu={handleMenu} />
            </animated.div>
          ) : (
            ""
          )
        )}
      </div>
    </nav>
  );
}
