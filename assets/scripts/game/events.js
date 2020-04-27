const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')
let value = ''

const onStartGame = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.startGame(formData)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onMakeMove = function (event) {
  event.preventDefault()
  const update = {
    "game": {
      "cell": {
      },
      "over": false
    }
  }

  if (!store.game.cells[event.target.id] && !store.game.over) {
    console.log(!store.game.over)
    update.game.cell.index = event.target.id

    if (store.turn % 2 === 1) {
      update.game.cell.value = "X"
      value = "X"
    } else {
      update.game.cell.value = "O"
      value = "O"
    }
    updateBoard(event.target.id, value)
    console.log(update)
    console.log(event)
    const form = event.target
    console.log('form: ', form)
    // const formData = getFormFields(form)
    // console.log(formData)

    api.updateGame(update)
      .then(ui.makeMoveSuccess)
      .catch(ui.makeMoveFailure)
  }
}

const onNewGame = function () {

}

const updateBoard = function (index, value) {
  const square = '#' + index

  $(square).text(value)
  if (value === "X") {
    $(square).addClass('success')
  } else {
    $(square).addClass('failure')
  }
}



module.exports = {
  onStartGame,
  onMakeMove,
  onNewGame
}
