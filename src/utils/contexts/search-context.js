import React, { createContext, useState } from 'react'
const defaultState = {
  searchQuery: null,
  searchModalOpen: false,
  searchResults: null
}
export const Context = createContext(defaultState)

const SearchContextProvider = props => {
  const [searchQuery, setSearchQuery] = useState(null)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [searchResults, setSearchResults] = useState(null)

  return (
    <Context.Provider value={{
      query: [searchQuery, setSearchQuery],
      modal: [searchModalOpen, setSearchModalOpen],
      result: [searchResults, setSearchResults]
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default SearchContextProvider
