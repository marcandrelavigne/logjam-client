import React, { createContext, useState } from 'react'
const defaultState = {
  searchQuery: null,
  searchModalOpen: false,
  searchResults: null
}
export const SearchContext = createContext(defaultState)

const SearchContextProvider = props => {
  const [searchQuery, setSearchQuery] = useState(null)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [searchResults, setSearchResults] = useState(null)

  return (
    <SearchContext.Provider value={{
      query: [searchQuery, setSearchQuery],
      modal: [searchModalOpen, setSearchModalOpen],
      result: [searchResults, setSearchResults]
    }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
