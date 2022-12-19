// Declare deck variables

let stock = []
let waste = []
let pyramid = []
let cardSum
let winner
let noMoreMoves
let cardToRemove

// Cached element references

let stockEl = document.getElementById('stock')
let wasteEl = document.getElementById('waste')
let card0El = document.getElementById('p0')

// Event listeners

document.getElementById('btn').addEventListener('click', handleClick)

// Functions

init()

function init() {
  winner = false
  noMoreMoves = false
  // Initialize stock with array of 52 cards 
  stock = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  pyramidRender()
}

function pyramidRender() {
  for (let i = 0; i < 28; i++) {
    // Assigns random index to randCard
    let randCard = Math.floor(Math.random() * stock.length)
    // Assign card with the random index to a variable
    let cardGone = stock.splice(randCard, 1)[0]
    // Pushes that value into pyramid array
    pyramid.push(cardGone)
  }
}

// Function to handle a button click:

function handleClick() {
  if (stock.length > 0) {
    // Randomly select number from total cards remaining
    let randIdx = Math.floor(Math.random() * stock.length)
    // Assign card with the random index to a variable
    let cardPicked = stock.splice(randIdx, 1)[0]
    // Add card picked to deck 2
    waste.push(cardPicked)
    // Pass card picked to render function to display
    render(cardPicked)
  }
}

// Function to render deck state

function render(cardPicked) {
	// Remove outline class when first card is picked
  if (waste.length === 1) {
    wasteEl.classList.remove('outline')
  }
  // Removes previous picked card from deck 2 class list
  if (waste.length > 1) {
    wasteEl.classList.remove(cardToRemove)
  }
  // Set card to be removed on next click
  cardToRemove = cardPicked
  // Add current card picked to deck 2 element
  wasteEl.classList.add(cardPicked)
	// Adjust shadow when deck gets above/below halfway full
  if (waste.length === 26) {
    wasteEl.classList.add('shadow')
    stockEl.classList.remove('shadow')
  }
	// Remove card back color and add outline when last card is picked
  if (stock.length === 0) {
    stockEl.classList.add('outline')
    stockEl.classList.remove('back-red')
  }
}


// Define the required variables to track the state of the game.
  // cardOne: will store the value of the first card selected.
  // cardTwo: will store the value of the second card selected.
  // pyramid: where the values of the cards in the pyramid are stored (I’m not sure if it would be easier to have 7 different variables for the different rows)
  // stockPile: will contain an array of the 24 shuffled cards not in the pyramid.
  // wastePile: will be an empty array used to hold the cards moved from the stockPile array.
  // cardSum: will store the sum of the values of the 2 cards selected, and compare to see if the sum is equal to 13.
  // winner: set to false to start, but will equal true if the pyramid is cleared.
  // noMoreMoves: set to false to start, but will equal true if the stock pile is looked through 3 times and there are still cards in the pyramid.

// Store cached element references.
  // cardDeckEl: store the 52 elements representing the playable cards on the screen.
  // messageEl: store the element that displays the game’s status on the screen.
  // resetBtnEl: reset button that reshuffles the cards and makes a new pyramid.

// Create init() function that initializes the game, and call it when the app loads (similar to TTT).
  // Set the winner and noMoreMoves variables to false.
  // Set wastePile to an empty array.
  // Call render() function.

// Create render() function to set the board.
  // Call shuffle() function that shuffles the cards.
  // Call placePyramid() function that places 28 shuffled cards on the game board (in the pyramid variable) and the remaining 24 in the stockPile variable array.
  //  Call updateMessage() function to show status of the game.

// Create shuffle() function that shuffles the 52 cards (cardDeckEl) randomly each time it’s called.
  // I plan on joining Ben’s optional lesson on CSS playing cards, and I’ve started doing research on how to make a shuffle function.

// Create placePyramid() function that sets the board when it’s called.
  // I need to do more research on this, this is one of the few things I’m not sure about for this game. I’m not sure what the best way to go about making this pyramid is.

// Create updateMessage() function.
  // There’s not a whole lot of messages to show. Just a winning message when the board is cleared, a count to let you know how many more times you have to look through the stock pile, a loser message.

// Create handleClickOne() function.
  // Stores the value of the first card that’s clicked, make a conditional that doesn’t allow you to click on a card that’s already selected or a card that is covered up.

// Create handleClickTwo() function.
  // Stores the value of the second card that’s clicked, make a conditional that doesn’t allow you to click on card one or on a card that is covered up.

// Create isThirteen() function.
// Has a conditional to see if the first card is a King (===13), and if so clear that card and re-choose a first card.
// Make a conditional that takes the sum of both selected cards, and if it equals 13 then clear both cards. If not, then give a message saying those cards aren’t pairs and select a new first card.

// Create checkForWinner() function.
  // Check if there are any cards remaining in the pyramid, if there aren’t, set winner = true. If not, move on.
  // Keep track of the amount of times we’ve gone through the stock pile. If we go through 3 times, set noMoreMoves = true.

// Might need a function to move cards from the stock pile to the waste pile, and then back to the stock pile.

// Create reset button that calls the init() function.
