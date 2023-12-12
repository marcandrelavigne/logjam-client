import React, { useEffect, useState } from 'react'
import { playTime } from '../utils/helpers/play-time'

const GameCard = props => {
  const [formatedPlayTime, setFormatedPlayTime] = useState(0)
  const game = props.game

  useEffect(() => {
    const getTime = playTime(game.gameplayMain, game.gameplayMainExtra)
    setFormatedPlayTime(getTime)
  }, [])

  return (
    <article
      className='flex items-center'
      key={game.name}
    >
      <img
        className='w-auto h-auto max-w-[8rem] max-h-48 mr-12'
        src={game.imageUrl}
        alt={game.name}
      />
      <div>
        <h3>{game.name}</h3>
        <span>{formatedPlayTime}</span>
      </div>
    </article>
  )
}

export default GameCard
