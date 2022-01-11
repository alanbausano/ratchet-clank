import React from 'react'

export default function ProductosCarrito({ carrito, dispatch, actualizar, setActualizar }){
  const handleEliminar = (id) => {
    dispatch({type:'BORRAR', payload:id})
  }

  const handleRestar = (id) => {
    carrito.map(producto => {
      if(producto.id === id && producto.cantidad > 1) {
        setActualizar(!actualizar)
        return (producto.cantidad -= 1)
      } else {
        return null
      }
    })
  }

  const handleSumar = (id) => {
    carrito.map(producto => {
      if(producto.id === id) {
        setActualizar(!actualizar)
        return (producto.cantidad += 1)
      } else {
        return null
      }
    })
  }
  return (
    <>
     {carrito.map(producto => (
          <div key={producto.id} className="producto-container" >
            <div>
              <img src={producto.img} className='imagen-producto' alt=""/>
            </div>
            <div className="descripcion-container">
              <h3>{producto.nombre}</h3>
              <p style={{padding:'3px', color:'#222222'}}>{producto.descripcion}</p>
              <button className={'btn-item'} onClick={() => handleRestar(producto.id)}><i className="fas fa-minus"></i></button>{producto.cantidad}
              <button className={'btn-item'} onClick={() => handleSumar(producto.id)}><i className="fas fa-plus"></i></button>
              <button className={'btn-item eliminar'} onClick={() => handleEliminar(producto.id)}>Delete</button><br/>
              <h4>${producto.cantidad * producto.precio}.00</h4>
            </div>
          </div>
      ))} 
    </>
  )
}
