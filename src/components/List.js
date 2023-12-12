import React, { useEffect, useState, useContext } from 'react'
import { GameListContext } from '../utils/contexts/game-list-context'
import { gameList } from '../utils/helpers/game-list'


const List = props => {
  const [loading, setLoading] = useState(false)
  const type = props.type ? props.type : 'backlog'

  useEffect(() => {
    setLoading(true)
    gameList(type)
      .then(data => {
        setLoading(false)
      })
      .catch(function () {
        // TODO: Display error message
        setLoading(false)
      })
  }, [])

  return (
    <ul className={props.className}>
      {props.children}
    </ul>
  )
}

export default List
