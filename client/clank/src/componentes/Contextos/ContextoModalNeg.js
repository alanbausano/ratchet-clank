import React, { createContext, useState } from 'react'

export const ContextoModalNeg = createContext();

export default function ContextoModalNegProvider(props) {
  const [modalNegativo, setModalNegativo] = useState(false)
 
  return (
    <ContextoModalNeg.Provider value={[modalNegativo, setModalNegativo]}>
      {props.children}
    </ContextoModalNeg.Provider>
  )
}
