import React, { useContext, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PS2 from "../../imagenes/rycPS2.png";
import PS3 from "../../imagenes/rycPS3.jpg";
import PS4 from "../../imagenes/rycPS4.jpg";
import PS5 from "../../imagenes/rycPS5.jpg";
import { ContextoReducer } from "../Contextos/ContextoReducer";
import ModalAgregar from '../Modales/ModalAgregar' 
import ModalNoAgregar from '../Modales/ModalNoAgregar' 
import { ContextoModales } from "../Contextos/ContextoModales";
import { ContextoModalNeg } from "../Contextos/ContextoModalNeg";

export default function ProductosMobile() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [modal, setModal] = useContext(ContextoModales);
  const [modalNeg, setModalNeg] = useContext(ContextoModalNeg);
  const [carrito, dispatch] = useContext(ContextoReducer);

  const handleAgregar = (nombre, precio, id, img) => {
    let ids = carrito.find((producto) => producto.id === id);
    if (ids) {
      setModalNeg(!modalNeg);
    } else {
      setModal(!modal);
      return dispatch({
        type: "AGREGAR",
        payload: { id, nombre, precio, cantidad: 1, img },
      });
    }
  };
  return (
    <div className="productos-container-m">
      <div className="tits-container titulos-m">
        <h2>Acquire your game today!</h2>
        <p>Get 45% off on all games just by getting registered</p>
      </div>
      <div data-aos="fade-up" className="card-m" id="ps5-m">
        <div className="img-m ps5" />
        <div style={{ paddingBottom: "8px" }}>
          <h3>Ratchet & Clank PS5</h3>
          <h4 className="precio-m">$600</h4>
        </div>
        <button
          onClick={() => handleAgregar("Ratchet & Clank PS5", 600, 1, PS5)}
        >
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
      <div data-aos="fade-up" className="card-m" id="ps4-m">
        <div className="img-m ps4" />
        <div style={{ paddingBottom: "8px" }}>
          <h3>Ratchet & Clank PS4</h3>
          <h4 className="precio-m">$400</h4>
        </div>
        <button
          onClick={() => handleAgregar("Ratchet & Clank PS4", 400, 2, PS4)}
        >
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
      <div data-aos="fade-up" className="card-m" id="ps3-m">
        <div className="img-m ps3" />
        <div style={{ paddingBottom: "8px" }}>
          <h3>Ratchet & Clank PS3</h3>
          <h4 className="precio-m">$300</h4>
        </div>
        <button
          onClick={() => handleAgregar("Ratchet & Clank PS3", 300, 3, PS3)}
        >
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
      <div data-aos="fade-up" className="card-m">
        <div className="img-m ps2" />
        <div style={{ paddingBottom: "8px" }}>
          <h3>Ratchet & Clank PS2</h3>
          <h4 className="precio-m">$150</h4>
        </div>
        <button
          onClick={() => handleAgregar("Ratchet & Clank PS2", 150, 4, PS2)}
        >
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
      <div className="custom-shape-divider-bottom-1619448152">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <ModalAgregar />
      <ModalNoAgregar />
    </div>
  );
}
