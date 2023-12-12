import React, { useContext } from 'react'
import { SearchContext } from '../utils/contexts/search-context'
import GameCard from './GameCard'

const Modal = props => {
  const { query, modal, result } = useContext(SearchContext)
  const [searchQuery, setSearchQuery] = query
  const [searchModalOpen, setSearchModalOpen] = modal
  const [searchResults, setSearchResults] = result

  const closeModal = () => {
    setSearchModalOpen(false)
    setSearchQuery(null)
    setSearchResults(null)
  }

  return (
    <>
      {searchModalOpen && (
        <div className={props.className}>
          <header className='container mx-auto flex items-center flex-col p-4 relative'>
            <h2 className='text-xl font-bold'>Searching for: {searchQuery}</h2>
            <span className=''>{searchResults?.length} results</span>
            <button
              className='absolute right-0 top-0'
              onClick={() => closeModal()}
            >
              Close
            </button>
          </header>
          <div className='container mx-auto overflow-x-hidden overflow-scroll space-y-8 h-[calc(100%-14.8rem)] pb-8'>
            {searchResults?.map(game =>
              <GameCard game={game} />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
