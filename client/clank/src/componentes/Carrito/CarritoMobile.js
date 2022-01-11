import { React, useState, useContext } from "react";
import { ContextoReducer } from "../Contextos/ContextoReducer";
import ProductosCarroMobile from "./ProductosCarroMobile";


export default function CarritoMobile() {
  const [carrito, dispatch] = useContext(ContextoReducer);
  const [actualizar, setActualizar] = useState(true);
  let totales = carrito.map((producto) => producto.cantidad * producto.precio);
  if (carrito.length === 0) {
    return (
      <div className="carrito-container-m" id='cart'>
        <div className="empty-cart-m">
        <h1>Shopping Cart</h1>
        <h2><i className="fas fa-shopping-cart"></i> Cart is empty</h2>
        </div>
      </div>
    );
  }
  return (
      <div className="carrito-container-m" id='cart'>
        <h1 style={{padding:'7px'}}>Shopping Cart</h1>
        <div className="items-container-m">
          <ProductosCarroMobile
            carrito={carrito}
            dispatch={dispatch}
            actualizar={actualizar}
            setActualizar={setActualizar}
          />
          <div className="totales-container">
          <div>
          Total: $
            {totales.reduce((acc, curr) => {
              return acc + curr;
            }, 0)}
            .00{actualizar}
          </div>
            <div>
            <button className="nav-item registro">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
     
  );
}
