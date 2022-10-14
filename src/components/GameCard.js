import React, { useEffect, useState } from 'react'
import { playTime } from '../utils/helpers/play-time'

const GameCard = props => {
  const [formatedPlayTime, setFormatedPlayTime] = useState(0)
  const game = props.game

  useEffect(() => {
    const getTime = playTime(game.comp_main, game.comp_plus)
    setFormatedPlayTime(getTime)
  }, [])

  return (
    <article
      className='flex items-center'
      key={game.game_id}
    >
      <img
        className='w-auto h-auto max-w-[8rem] max-h-48 mr-12'
        src={`https://howlongtobeat.com/games/${game.game_image}`}
        alt={game.game_name}
      />
      <div>
        <h3>{game.game_name}</h3>
        <span>{formatedPlayTime}</span>
      </div>
    </article>
  )
}

export default GameCard
