import React, { createContext, useReducer } from 'react'
import { ReducerDB } from '../Reducers/ReducerDB'

export const ContextoDB = createContext()

export default function ContextoDBProvider(props) {
  const [subscribers, dispatch] = useReducer(ReducerDB, [])

  return (
    <ContextoDB.Provider value={[subscribers, dispatch]}>
      {props.children}
    </ContextoDB.Provider>
  )
}
