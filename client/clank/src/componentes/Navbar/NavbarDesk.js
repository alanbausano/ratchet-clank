import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Dropdown from "./Dropdown";
import NavLogo from "./NavLogo";
import { Link as Linker } from "react-scroll";
import { ContextoReducer } from "../Contextos/ContextoReducer";
import AuthContext from "../Contextos/ContextoLogin";

export default function NavbarDesk() {
  const authContxt = useContext(AuthContext);
  const logoutHandler = () => {
    authContxt.logout();
  }
  const isLoggedIn = authContxt.isLoggedIn;
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const [carrito] = useContext(ContextoReducer);
  let numeroCarrito = carrito.length;
  const fade = useSpring({
    transform: mostrarDropdown
      ? "translate3d(0,0,0)"
      : "translate3d(0,-510px,0)",
    opacity: mostrarDropdown ? 1 : 0,
  });
  return (
    <nav className="nav-container-desk" id="main">
      <div className="bar-container">
        <NavLogo />
      </div>
      <ul className="menu-desk">
        <div>
          <button
            onClick={() => setMostrarDropdown(!mostrarDropdown)}
            className="nav-item juegos"
          >
            Platforms{" "}
            <i
              className={
                mostrarDropdown ? "fas fa-caret-down" : "fas fa-caret-up"
              }
            ></i>
          </button>
          <animated.div style={fade}>
            <Dropdown
              mostrarDrop={mostrarDropdown}
              setMostrarDrop={setMostrarDropdown}
            />
          </animated.div>
        </div>
        <li>
          <Linker to="games" spy={true} smooth={true} offset={0} duration={500}>
            <button className="nav-item">Games</button>
          </Linker>
        </li>
        <li>
          <Linker
            to="reviews"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <button className="nav-item">Reviews</button>
          </Linker>
        </li>
        <li>
          <Linker to="cart" spy={true} smooth={true} offset={0} duration={500}>
            <button className="nav-item juegos">
              <i className="fas fa-shopping-cart"></i> Cart ({numeroCarrito})
            </button>
          </Linker>
        </li>
      </ul>
      <div className="container-registro">
        { !isLoggedIn && <Link to="/login">
          <button className="nav-item">Log In</button>
        </Link>}
        { isLoggedIn && <Link to='profile'><button className="nav-item">My profile</button></Link> } 
        { !isLoggedIn ? <Link to="/signup">
          <button className="nav-item registro">Sign Up</button>
        </Link> : <button onClick={logoutHandler} className="nav-item registro">Log Out</button> }
      </div>
    </nav>
  );
}
