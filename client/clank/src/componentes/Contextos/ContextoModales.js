import React, { createContext, useState } from 'react'

export const ContextoModales = createContext();

export default function ContextoModalesProvider(props) {
  const [modal, setModal] = useState(false)
 
  return (
    <ContextoModales.Provider value={[modal, setModal]}>
      {props.children}
    </ContextoModales.Provider>
  )
}
