'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // your JS code goes here
  // unauthenticated events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  // authenticated events
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#start-game').on('submit', gameEvents.onStartGame)

  // game board events
  $('#0').on('click', gameEvents.onMakeMove)
  $('#1').on('click', gameEvents.onMakeMove)
  $('#2').on('click', gameEvents.onMakeMove)
  $('#3').on('click', gameEvents.onMakeMove)
  $('#4').on('click', gameEvents.onMakeMove)
  $('#5').on('click', gameEvents.onMakeMove)
  $('#6').on('click', gameEvents.onMakeMove)
  $('#7').on('click', gameEvents.onMakeMove)
  $('#8').on('click', gameEvents.onMakeMove)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#leave-game').on('click', gameEvents.onLeaveGame)
  $('#get-stats').on('click', gameEvents.onGetStats)

})
