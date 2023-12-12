import React, { createContext, useState } from 'react'
const defaultState = {
  listType: null
}
export const GameListContext = createContext(defaultState)

const GameListContextProvider = props => {
  const [listType, setListType] = useState(null)

  return (
    <GameListContext.Provider value={{
      type: [listType, setListType]
    }}>
      {props.children}
    </GameListContext.Provider>
  )
}

export default GameListContextProvider
