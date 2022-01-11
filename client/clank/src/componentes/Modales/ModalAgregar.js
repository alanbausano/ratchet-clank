import { useSpring, animated } from "react-spring";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ContextoModales } from "../Contextos/ContextoModales";
import { Link as Linker } from "react-scroll";


export default function ModalAgregar() {
  const [modal, setModal] = useContext(ContextoModales);

  const fade = useSpring({
    pointerEvents: modal ? 'all' : 'none',
    opacity: modal ? '1' : '0',
  });

  // if (modal === false) {
  //   return null;
  // }

  const handleModal = () => {
    setModal(!modal);
  };

  return ReactDOM.createPortal(
    <animated.div style={fade}>
    <div className="modal-bg">
      <div className="modal-card">
        <h4>Game added <i className="fas fa-check"></i></h4>
        <p>Successfully added this game to the shopping cart.</p>
        <div style={{ display: "flex" }}>
            <Linker smooth={true} offset={-15} duration={500} to="cart">
              <button className="nav-item registro" onClick={handleModal}>
                Go to cart
              </button>
            </Linker>
            <button className="cerrar" onClick={handleModal}>
              Close
            </button>
          </div>
      </div>
    </div>
    </animated.div>,
    document.getElementById("modal-agregar")
  );
}
