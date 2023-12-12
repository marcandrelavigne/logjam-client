/**
 * Get Games data from HLTB
 * @param  {String} query   The search query
 * @return {Object}         The sorted game list
 */

export const searchGame = query => {
  if (query !== '') {
    return new Promise(function (resolve, reject) {
      fetch('/games?' + new URLSearchParams({
        query: query
      }))
        .then((response) => response.json())
        .then(data => {
          resolve(data)
          return data.data
        })
    })
  }
}
