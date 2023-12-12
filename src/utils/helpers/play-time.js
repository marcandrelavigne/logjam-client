

/**
 * Round the playtime received from HLTB
 * @param  {String} main   Main time value
 * @param  {String} extra  Extra time value
 * @return {String}        The play time values rounded to the nearest 0.25h
 */

export function playTime(main, extra) {
  let gameTime = 0
  let mainTime = main
  let extraTime = extra

  if (extraTime !== 0 && extraTime > mainTime) {
    gameTime = `${mainTime}h - ${extraTime}h`
  } else {
    gameTime = `${mainTime}h`
  }

  return gameTime
}
