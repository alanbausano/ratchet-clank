import React, { createContext, useReducer } from 'react'
import { Reducer } from '../Reducers/Reducers';

export const ContextoReducer = createContext();

export default function ContextoReducerProvider(props) {
  const [carrito, dispatch] = useReducer(Reducer, [])
 
  return (
    <ContextoReducer.Provider value={[carrito, dispatch]}>
      {props.children}
    </ContextoReducer.Provider>
  )
}
