import { useSpring, animated } from "react-spring";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ContextoModales } from "../Contextos/ContextoModales";

export default function ModalLogin(props) {
  const [modal, setModal] = useContext(ContextoModales);

  const fade = useSpring({
    pointerEvents: modal ? 'all' : 'none',
    opacity: modal ? '1' : '0',
  });

  const handleModal = () => {
    setModal(!modal);
  };

  return ReactDOM.createPortal(
    <animated.div style={fade}>
    <div className="modal-bg">
      <div className="modal-card">
        <h4>{ props.login ? 'Logged In' : 'Error' }</h4>
        <p>{ props.login ?  'Succesful Login!' : props.message }</p>
        <div style={{ display: "flex" }}>
            { props.login ? <Link to='/'><button className="nav-item registro" onClick={handleModal}>
              Back to homepage
            </button></Link> : <button className="cerrar" onClick={handleModal}>
              Close
            </button> }
          </div>
      </div>
    </div>
    </animated.div>,
    document.getElementById("modal-login")
  );
}
//HACER FOCUS EN EL BOTON DEL MODAL PARA QUE EL ENTER FUNCIONE DIRECTO AHI O HACER UN POINTER EVENTS NONE AUNQUE QUIZAS FALLE PORQUE EL ENTER NO ES UN POINTER EVENT