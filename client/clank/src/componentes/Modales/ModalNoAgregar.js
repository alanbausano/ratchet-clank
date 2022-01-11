import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ContextoModalNeg } from "../Contextos/ContextoModalNeg";
import { useSpring, animated } from "react-spring";
import { Link as Linker } from "react-scroll";

export default function ModalNoAgregar() {
  const [modalNegativo, setModalNegativo] = useContext(ContextoModalNeg);

  const fade = useSpring({
    pointerEvents: modalNegativo ? "all" : "none",
    opacity: modalNegativo ? "1" : "0",
  });

  // if (modalNegativo === false) {
  //   return null;
  // }

  const handleModal = () => {
    setModalNegativo(!modalNegativo);
  };

  return ReactDOM.createPortal(
    <animated.div style={fade}>
      <div className="modal-bg">
        <div className="modal-card">
          <h4>Can't add the game twice</h4>
          <p>
            This game was already added to the shopping cart, you can increase the quantity
            from there.
          </p>
          <div className="button-container">
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
    document.getElementById("modal-noAgregar")
  );
}
