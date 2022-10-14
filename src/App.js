import React, { useEffect, useState } from 'react'
import Logo from './components/Logo'
import Nav from './components/Nav'
import Modal from './components/Modal'
import SearchForm from './components/SearchForm'
import SearchContextProvider from './utils/contexts/search-context'

const App = props => {
  const [gameList, setGameList] = useState(null)

  useEffect(() => {
    /* fetch('/games')
      .then((response) => response.json())
      .then(data => setGameList(data.data)) */
  }, [])

  return (
    <>
      <Nav className="w-full sticky z-10 h-16 top-0 bg-red-600 p-4 flex justify-between">
        <Logo />
        <SearchContextProvider>
          <SearchForm />
          <Modal className="fixed top-16 left-0 w-full bg-slate-400/60 backdrop-blur-sm" />
        </SearchContextProvider>
      </Nav>
      <main>
        Hello
      </main>
    </>
  )
}

export default App
