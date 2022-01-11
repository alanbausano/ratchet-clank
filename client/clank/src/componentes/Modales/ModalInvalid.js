import { useSpring, animated } from "react-spring";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ContextoModales } from "../Contextos/ContextoModales";

export default function ModalInvalid(props) {
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
        <h4>{ props.signup ? 'Registered' : 'Error' }</h4>
        <p>{ props.signup ?  'Succesfully registered!' : props.message }</p>
        <div style={{ display: "flex" }}>
            { props.signup ? <Link to='/login'><button className="nav-item registro" onClick={handleModal}>
              Log in with your new account
            </button></Link> : <button className="cerrar" onClick={handleModal}>
              Close
            </button> }
          </div>
      </div>
    </div>
    </animated.div>,
    document.getElementById("modal-invalid")
  );
}
