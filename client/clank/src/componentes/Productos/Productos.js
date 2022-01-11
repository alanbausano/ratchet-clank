import React, { useContext, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PS2 from "../../imagenes/rycPS2.png";
import PS3 from "../../imagenes/rycPS3.jpg";
import PS4 from "../../imagenes/rycPS4.jpg";
import PS5 from "../../imagenes/rycPS5.jpg";
import TituloProds from "../Titulos/TituloProds";
import TituloProds2 from "../Titulos/TituloProds2";
import { ContextoReducer } from "../Contextos/ContextoReducer";
import ModalAgregar from '../Modales/ModalAgregar' 
import ModalNoAgregar from '../Modales/ModalNoAgregar' 
import { ContextoModales } from "../Contextos/ContextoModales";
import { ContextoModalNeg } from "../Contextos/ContextoModalNeg";

export default function Productos() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [modal, setModal] = useContext(ContextoModales)
  const [modalNeg, setModalNeg] = useContext(ContextoModalNeg)
  const  [carrito, dispatch]  = useContext(ContextoReducer);
  


const handleAgregar = (nombre, precio, id, img) => {
  let ids = carrito.find(producto => producto.id === id)
  if(ids) {
    setModalNeg(!modalNeg)
  } else {
    setModal(!modal)
    return dispatch({type: 'AGREGAR', payload:{id, nombre, precio, cantidad:1, img}})
  }
}

  return (
    <div className="container-productos" id='games'>
      <TituloProds />
      <TituloProds2 />
      <div data-aos="fade-right" className="card" id='ps5'>
        <img src={PS5} alt="img" className="cover" />
        <div style={{ paddingBottom: "8px" }}>
          <h3>Ratchet & Clank PS5</h3>
          <h4 className="precio-m">$600</h4>
        </div>
        <button onClick={() => handleAgregar('Ratchet & Clank PS5', 600, 1, PS5)}>
          <i className="fas fa-shopping-cart"></i> Add to cart
        </button>
      </div>
      <div data-aos="fade-left" className="card" id='ps4'>
        <img src={PS4} alt="img" className="cover" />
        <div style={{ paddingBottom: "8px" }}>
          <h3>Ratchet & Clank PS4</h3>
          <h4 className="precio-m">$400</h4>
        </div>
        <button onClick={() => handleAgregar('Ratchet & Clank PS4', 400, 2, PS4)}>
          <i className="fas fa-shopping-cart"></i> Add to cart
        </button>
      </div>
      <div data-aos="fade-right" className="card" id='ps3'>
        <img src={PS3} alt="img" className="cover" />
        <div style={{ paddingBottom: "8px" }}>
          <h3>Ratchet & Clank PS3</h3>
          <h4 className="precio-m">$300</h4>
        </div>
        <button onClick={() => handleAgregar('Ratchet & Clank PS3', 300, 3, PS3)}>
          <i className="fas fa-shopping-cart"></i> Add to cart
        </button>
      </div>
      <div data-aos="fade-left" className="card" id='ps2'>
        <img src={PS2} alt="img" className="cover ps2" />
        <div style={{ paddingBottom: "8px" }}>
          <h3>Ratchet & Clank PS2</h3>
          <h4 className="precio-m">$150</h4>
        </div>
        <button onClick={() => handleAgregar('Ratchet & Clank PS2', 150, 4, PS2)}>
          <i className="fas fa-shopping-cart"></i> Add to cart
        </button>
      </div>
      <div className="custom-shape-divider-bottom-1619296700">
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
