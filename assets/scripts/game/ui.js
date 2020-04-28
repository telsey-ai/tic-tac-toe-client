const store = require('../store')
const api = require('./api')


const startGameSuccess = function (data) {
  $('#message').text("Its X's turn!")
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`startGameSuccess ran. Data is:`, data)

  // "store" the user object:
  // create a key on the store object
  // hold the user object inside
  store.game = data.game
  console.log(store.game)
  store.turn = 1

  // Sign in succcess!
  // Hide the unauthenticated stuff,
  // Show the authenticated stuff:
  $('#authenticated').hide()
  $('#unauthenticated').hide()
  $('#game').show()

  // reset form:
  // $('form').trigger('reset')
}

const startGameFailure = function (error) {
  $('#message').text('startGame failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`startGameFailure ran. Error is:`, error)

  // reset form:
  // $('form').trigger('reset')
}

const makeMoveSuccess = function (data) {
  console.log('data is: ', data)

  if (++store.turn % 2 === 0) {
    $('#message').text("Its O's turn!")
  } else {
    $('#message').text("Its X's turn!")
  }

  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`makeMoveSuccess ran. Data is:`, data)

  // "store" the user object:
  // create a key on the store object
  // hold the user object inside
  // store.game = data.game
  store.game = data.game
  checkForWin()
  console.log('store.game: ', store.game)
  // store.turn++

  // Sign in succcess!
  // Hide the unauthenticated stuff,
  // Show the authenticated stuff:
  // $('#authenticated').hide()
  // $('#unauthenticated').hide()
  // $('#game').show()

  // reset form:
  // $('form').trigger('reset')
}

const makeMoveFailure = function (error) {
  $('#message').text('makeMove failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`makeMoveFailure ran. Error is:`, error)

  // reset form:
  // $('form').trigger('reset')
}

const startNewGameSuccess = function (data) {
  $('#message').text("Its X's turn!")
  $('#message').removeClass()
  $('#message').addClass('success')

  // reset game board
  $('.col-4').removeClass('success')
  $('.col-4').removeClass('failure')
  $('.col-4').text('Play here?')

  console.log(`startGameSuccess ran. Data is:`, data)

  // "store" the user object:
  // create a key on the store object
  // hold the user object inside
  store.game = data.game
  console.log(store.game)
  store.turn = 1

  // Sign in succcess!
  // Hide the unauthenticated stuff,
  // Show the authenticated stuff:
  $('#authenticated').hide()
  $('#unauthenticated').hide()
  $('#game').show()

  // reset form:
  // $('form').trigger('reset')
}

const startNewGameFailure = function (error) {
  $('#message').text('startGame failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`startGameFailure ran. Error is:`, error)

  // reset form:
  // $('form').trigger('reset')
}

const leaveGameSuccess = function () {
  $('#authenticated').show()
  $('#unauthenticated').hide()
  $('#game').hide()
}

const leaveGameFailure = function () {
  $('#message').text('startGame failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`startGameFailure ran. Error is not knowable`)
}

const getStatsSuccess = function (data) {
  console.log(data)
  const gamesPlayed = data.games.length
  let messageDisplay = 'User has played ' + gamesPlayed + ' games and won '
  let wins = 0

  for (let i = 0; i < data.games.length; i++) {
    const board = data.games[i].cells
    console.log(board)
    if (board[4] === 'X') {
      if (board[1] === 'X' && board[7] === 'X') {
        wins++
        console.log('1 ran')
      } else if (board[3] === 'X' && board[5] === 'X') {
        wins++
        console.log('1 ran')
      } else if (board[2] === 'X' && board[6] === 'X') {
        wins++
        console.log('1 ran')
      } else if (board[0] === 'X' && board[8] === 'X') {
        wins++
        console.log('1 ran')
      }
    }
    if (board[0] === 'X') {
      if (board[1] === 'X' && board[2] === 'X') {
        wins++
        console.log('1 ran')
      } else if (board[3] === 'X' && board[6] === 'X') {
        wins++
        console.log('1 ran')
      }
    }
    if (board[8] === 'X') {
      if (board[5] === 'X' && board[2] === 'X') {
        wins++
        console.log('1 ran')
      } else if (board[6] === 'X' && board[7] === 'X') {
        wins++
        console.log('1 ran')
      }
    }
  }

  messageDisplay = messageDisplay + wins + ' games'
  $('#message').text(messageDisplay)
}

const getStatsFailure = function (error) {
  $('#message').text('get stats failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`getStatsFailure ran. Error is:`, Error)
}

const checkForWin = function () {
  const board = store.game.cells
  if (!!board[0]) {
    if ((store.game.cells[0] === store.game.cells[1]) && (store.game.cells[1] === store.game.cells[2])) {
      store.game.over = true
      console.log(1)
    } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6]) {
      store.game.over = true
      console.log(4)
    } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8]) {
      store.game.over = true
      console.log(7)
    }
  }
  if (!!board[4]) {
    if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5]) {
      store.game.over = true
      console.log(2)
    } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7]) {
      store.game.over = true
      console.log(5)
    } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6]) {
      store.game.over = true
      console.log(8)
    }
  }
  if (!!board[8]) {
    if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8]) {
      store.game.over = true
      console.log(3)
    } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8]) {
      store.game.over = true
      console.log(6)
    }
  }


  if (store.game.over === true) {
    if (store.turn % 2 === 0) {
      $('#message').text('X Wins, Game Over!')
    } else {
      $('#message').text('O Wins, Game Over!')
    }
  }
  if (!!board[0]) {
    if (!!board[1]) {
      if (!!board[2]) {
        if (!!board[3]) {
          if (!!board[4]) {
            if (!!board[5]) {
              if (!!board[6]) {
                if (!!board[6]) {
                  if (!!board[7]) {
                    if (!!board[8]) {
                      if (!store.game.over) {
                        store.game.over = true
                        console.log('Its a Draw!')
                        $('#message').text('Its a Draw!')
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  console.log('game over:', store.game.over)
  if (store.game.over) {
    store.update.game.over = true
    console.log('check for win api update', store.update)
    api.updateGame(store.update)
      .then()
      .catch()
  }
}

module.exports = {
  startGameFailure,
  startGameSuccess,
  makeMoveFailure,
  makeMoveSuccess,
  startNewGameSuccess,
  startNewGameFailure,
  leaveGameSuccess,
  leaveGameFailure,
  getStatsSuccess,
  getStatsFailure,
  checkForWin
}
