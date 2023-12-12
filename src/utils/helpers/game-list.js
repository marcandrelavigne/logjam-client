/**
 * Get Games list from DB
 * @param  {String} query   The search query
 * @return {Object}         The sorted game list
 */

export const gameList = (type) => {

  if (!type || type === null) {
    return 'Game list type is not defined.'
  }

  let listHeaders = new Headers()
  listHeaders.append('uuid', 'e55f35ba-e34d-4f96-a589-259a17dcca8b')

  const requestOptions = {
    method: 'GET',
    headers: listHeaders,
    redirect: 'follow'
  }

  return new Promise(function (resolve, reject) {
    fetch('/lists?action=get', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  })
}