# **Tic-Tac-Toe README**

This is a tic-tac-toe application.  You can play the live version at this address https://telsey-ai.github.io/tic-tac-toe-client/ .

### Technologies Used

- ajax
- api's
- jquery
- javascript
- HTML
- CSS
- bootstrap
- grunt
- github

### Planning and development
Prior to beggining this project I created the wireframes and user stories.

I started coding this project by creating a landing page view for unauthorized users and completed event hanlders that would call api authorization functions e.g. sign up, sign in, change password.  I made these communicate with the user through UI updates to the page view.

After completing the authorization functionality I developed the game board.  I then created event listeners and handlers for each individual board square.

When a square is clicked an event is ran which checks if the space is a valid play.  If it is then it runs an api call to update the server on the game state.

One issue i ran into while developing was that I was making the api call to update the board before the client side game logic was running.  This meant that when the api call went out it hadn't yet updated the "over" key to true that was sent to the server.

I solved this by sending an additional api call after the game logic detects that the game is over.  I believe it would be better to refactor the code so that the client side game logic runs first and updates its information then sends the api call.

### Unsolved problems

- Currently there is an issue where if you play a game of tic-tac-toe then leave the game and go back to play tic-tac-toe the board still has the html and css from the last play but the JavaScript representation of the board has been reset.  So it looks like there are already peices on the board but you can play over them and get some weird ui elements.

### wireframes and user stories

Wireframe link https://git.generalassemb.ly/telsey/project-planning-wireframes-study/blob/response/project_1_wireframes/tickTacToeWireFrame.jpeg

Version 1

- As an unregistered user I want to be able to sign up with email, pw, and pw confirmation
- As an registered user I want to be able to sign in with email and pw
- As a signed in user I want to be able to change my password
- As a signed in user I want to be able to sign out
- As a signed in user I want to start a new tic tac toe game
- As a signed in user playing tic tac toe, I want to be able to start as X
- As a signed in user playing tic tac toe, I want to rotate turns between X and O
- As a signed in user playing tic tac toe, I want to be able to add my token (x or o) to the spot I select
- As a signed in user playing tic tac toe, I want to add tokens only to valid spaces (not steal spaces)
- As a signed in user playing tic tac toe, I want to be able to see winner or tie
- As a signed in user playing tic tac toe, I want to stop playing once game is over (no adding more tokens)
- As a signed in user playing tic tac toe, I want to be able to play again
- As a signed in user, I want to be able to see how many games Ive played

Version 2

style
models
design
images
Version 3

?

Stretch Goals

- As a hardcore gamer i want the program to be responsive and quick so i can grind wins.
- As an investor i want their to be skins purchasable through microtransactions so i can get the best ROI on my investment.
- As an art lover i want the game to be visually stimulating so i can play for hours.
