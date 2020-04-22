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

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`changePasswordSuccess ran. Data is:`, data)
  // reset form:
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').text('Change password failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`changePasswordFailure ran. Error is:`, error)

  // reset form:
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  console.log('signOutSuccess ran and nothing was returned!')

  // Sign out success!
  // Hide the authenticated stuff, show the unauthenticated:
  $('#authenticated').hide()
  $('#unauthenticated').show()

  // clear out the user from the store object
  // set `user` to be `null`
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure

}
