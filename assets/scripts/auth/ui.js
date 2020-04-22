const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`signUpSuccess ran. Data is:`, data)

  // reset form:
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`signUpFailure ran. Error is:`, error)

  // reset form:
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`signInSuccess ran. Data is:`, data)

  // "store" the user object:
  // create a key on the store object
  // hold the user object inside
  store.user = data.user

  // Sign in succcess!
  // Hide the unauthenticated stuff,
  // Show the authenticated stuff:
  $('#authenticated').show()
  $('#unauthenticated').hide()

  // reset form:
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`signInFailure ran. Error is:`, error)

  // reset form:
  $('form').trigger('reset')
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure

}
