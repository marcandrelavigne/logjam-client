import React, { useEffect, useState } from 'react'
import Logo from './components/Logo'
import Nav from './components/Nav'
import Modal from './components/Modal'
import SearchForm from './components/SearchForm'
import SearchContextProvider from './utils/contexts/search-context'
import List from './components/List'

const App = props => {
  const [gameList, setGameList] = useState(null)

  return (
    <>
      <Nav className="w-full sticky z-10 h-16 top-0 bg-red-600 p-4 flex justify-between">
        <Logo />
        <SearchContextProvider>
          <SearchForm />
          <Modal className="fixed h-full top-16 left-0 w-full bg-slate-400/60 backdrop-blur-sm" />
        </SearchContextProvider>
      </Nav>
      <main>
        <List type='playlist' />
      </main>
      <Nav className="w-full fixed z-10 h-16 bottom-0 bg-red-600 p-4 flex justify-between">
        app nav
      </Nav>
    </>
  )
}

export default App
