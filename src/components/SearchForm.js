import React, { useRef, useState, useCallback, useContext } from 'react'
import { SearchContext } from '../utils/contexts/search-context'
import debounce from 'lodash.debounce'
import { searchGame } from '../utils/helpers/search'

const SearchForm = props => {
  const input = useRef(null)
  const [loading, setLoading] = useState(false)
  const { query, modal, result } = useContext(SearchContext)
  const [searchQuery, setSearchQuery] = query
  const [searchModalOpen, setSearchModalOpen] = modal
  const [searchResults, setSearchResults] = result

  // Search the game on HLTB with the entered search query
  const triggerSearch = e => {
    e.preventDefault()
    let query = input.current.value
    if (query !== '') {
      setLoading(true)
      setSearchQuery(query)
      searchGame(query)
        .then(data => {
          setSearchModalOpen(true)
          setSearchResults(data)
          setLoading(false)
        })
        .catch(function () {
          // TODO: Display error message
          setLoading(false)
        })
    }
  }

  // Auto-trigger the search action when user stops writing
  const handleChange = useCallback(
    debounce(triggerSearch, 1500), []
  )

  return (
    <form
      onSubmit={triggerSearch}
      className='flex'
    >
      <input
        ref={input}
        type='text'
        placeholder='Search...'
        onChange={handleChange}
        className='px-4 py-1'
      />
      <button
        onClick={triggerSearch}
        className='bg-primary text-white px-6 w-40'
      >
        <span>
          {loading ? (
            <>Loading...</>
          ) : (
            <>Search</>
          )}
        </span>
      </button>
    </form>
  )
}

export default SearchForm
