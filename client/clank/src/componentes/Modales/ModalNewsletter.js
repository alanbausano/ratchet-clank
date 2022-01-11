import { useSpring, animated } from "react-spring";
import ReactDOM from "react-dom";

export default function ModalNewsletter({ message, modal, setModal }) {
  const fade = useSpring({
    pointerEvents: modal ? "all" : "none",
    opacity: modal ? "1" : "0",
  });

  const handleModal = () => {
    setModal(!modal);
  };

  return ReactDOM.createPortal(
    <animated.div style={fade}>
      <div className="modal-bg">
        <div className="modal-card">
          <p>{message}</p>
          <div style={{ display: "flex" }}>
            <button className="cerrar" onClick={handleModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </animated.div>,
    document.getElementById("modal-newsletter")
  );
}
