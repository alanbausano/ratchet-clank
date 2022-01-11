import React, { useContext, useState } from "react";
import { useTransition, animated } from "react-spring";
import { Link as Linker } from "react-scroll";
import { ContextoReducer } from "../Contextos/ContextoReducer";
import { Link } from 'react-router-dom'
import AuthContext from "../Contextos/ContextoLogin";

export default function Menu(props) {
  const authContxt = useContext(AuthContext);
  const logoutHandler = () => {
    authContxt.logout();
  }
  const isLoggedIn = authContxt.isLoggedIn;
  const [carrito] = useContext(ContextoReducer);
  const [items, setItems] = useState(false);
  const transition = useTransition(items, {
    from: { x: 0, y: -410, opacity: 0, transition: "all ease 0.05s" },
    enter: (item) => (next) =>
      next({
        x: 0,
        y: item.y,
        opacity: 1,
        transition: "all ease 0.05s",
        delay: item.delay,
      }),
    leave: (item) => (next) =>
      next({
        x: 0,
        y: -420,
        opacity: 0,
        transition: "all ease 0.05s",
        delay: item.delay,
      }),
    // config: {
    //   duration: 500, // duration for the whole animation form start to end
    // },
  });
  return (
    <ul>
      <li>
      { !isLoggedIn && <Link to="/login">
          <button className="nav-item">Log In</button>
        </Link>}
        { isLoggedIn && <Link to='profile'><button className="nav-item">My profile</button></Link> }
      </li>
      <li>
      { !isLoggedIn ? <Link to="/signup">
          <button className="nav-item registro">Sign Up</button>
        </Link> : <button onClick={logoutHandler} className="nav-item registro">Log Out</button> }
      </li>
      <li>
        <Linker to="reviews">
          <button className="nav-item" onClick={() => props.cerrarMenu()}>Reviews</button>
        </Linker>
      </li>
      <li>
        <Linker to="cart" spy={true} smooth={true} offset={-10} duration={500}>
          <button className="nav-item" onClick={() => props.cerrarMenu()}>
            <i className="fas fa-shopping-cart"></i> Cart ({carrito.length})
          </button>
        </Linker>
      </li>
      <li>
        <button
          onClick={() =>
            setItems((item) =>
              item.length
                ? []
                : [
                    {
                      nombre: "PlayStation 5",
                      y: 0,
                      delay: 100,
                      id: "ps5-m",
                    },
                    {
                      nombre: "PlayStation 4",
                      y: 0,
                      delay: 200,
                      id: "ps5-m",
                    },
                    {
                      nombre: "PlayStation 3",
                      y: 0,
                      delay: 300,
                      id: "ps5-m",
                    },
                  ]
            )
          }
          className="nav-item"
        >
          Platforms{" "}
          <i
            className={items.length ? "fas fa-caret-down" : "fas fa-caret-up"}
          ></i>
        </button>

        {transition((style, item) =>
          item ? (
            <animated.div style={style}>
              <Linker
                to={item.id}
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                <button
                  onClick={() => props.cerrarMenu()}
                  className="nav-item-m"
                  to={item.link}
                >
                  {item.nombre}
                </button>
              </Linker>
            </animated.div>
          ) : (
            ""
          )
        )}
      </li>
    </ul>
  );
}
