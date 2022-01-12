import React, { useContext } from "react";
import { Link as Linker } from "react-scroll";
import { ContextoReducer } from "../Contextos/ContextoReducer";
import { Link } from "react-router-dom";
import AuthContext from "../Contextos/ContextoLogin";

export default function Menu(props) {
  const authContxt = useContext(AuthContext);
  const logoutHandler = () => {
    authContxt.logout();
  };
  const isLoggedIn = authContxt.isLoggedIn;
  const [carrito] = useContext(ContextoReducer);

  return (
    <ul className="menu-mobile">
      <li>
        {!isLoggedIn && (
          <Link to="/login">
            <button className="nav-item">Log In</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="profile">
            <button className="nav-item">My profile</button>
          </Link>
        )}
      </li>
      <li>
        {!isLoggedIn ? (
          <Link to="/signup">
            <button className="nav-item registro">Sign Up</button>
          </Link>
        ) : (
          <button onClick={logoutHandler} className="nav-item registro">
            Log Out
          </button>
        )}
      </li>
      <li>
        <Linker to="reviews">
          <button className="nav-item" onClick={() => props.cerrarMenu()}>
            Reviews
          </button>
        </Linker>
      </li>
      <li>
        <Linker to="cart" spy={true} smooth={true} offset={-10} duration={500}>
          <button className="nav-item" onClick={() => props.cerrarMenu()}>
            <i className="fas fa-shopping-cart"></i> Cart ({carrito.length})
          </button>
        </Linker>
      </li>
    </ul>
  );
}
