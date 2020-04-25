const config = require('../config')
const store = require('../store')

const startGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    body: ''
  })
}

const updateGame = function (update) {
  console.log('updateGame ran data is: ', update)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: update
  })
}

module.exports = {
  startGame,
  updateGame
}
