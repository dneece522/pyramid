// Declare deck variables

let stock = [] // array to hold the cards in the stock pile
let waste = [] // array to hold the cards in the waste pile
let pyramid = [] // array to hold the shuffled cards in the pyramid
let cardOneVal
let cardTwoVal
let cardSum 
let winner // if the board is clear, winner = true
let noMoreMoves // if we've gone through the stock deck 3 times, noMoreMoves = true, game is over
let cardToRemove

// Cached element references

let stockEl = document.getElementById('stock')
let wasteEl = document.getElementById('waste')
let cardOne = document.getElementById('pyramid')
let cardTwo = document.getElementById('pyramid')

      // Cached Elements for Each Card in the Pyramid
let card0El = document.getElementById('p0')
let card1El = document.getElementById('p1')
let card2El = document.getElementById('p2')
let card3El = document.getElementById('p3')
let card4El = document.getElementById('p4')
let card5El = document.getElementById('p5')
let card6El = document.getElementById('p6')
let card7El = document.getElementById('p7')
let card8El = document.getElementById('p8')
let card9El = document.getElementById('p9')
let card10El = document.getElementById('p10')
let card11El = document.getElementById('p11')
let card12El = document.getElementById('p12')
let card13El = document.getElementById('p13')
let card14El = document.getElementById('p14')
let card15El = document.getElementById('p15')
let card16El = document.getElementById('p16')
let card17El = document.getElementById('p17')
let card18El = document.getElementById('p18')
let card19El = document.getElementById('p19')
let card20El = document.getElementById('p20')
let card21El = document.getElementById('p21')
let card22El = document.getElementById('p22')
let card23El = document.getElementById('p23')
let card24El = document.getElementById('p24')
let card25El = document.getElementById('p25')
let card26El = document.getElementById('p26')
let card27El = document.getElementById('p27')

// Event listeners

document.getElementById('flipBtn').addEventListener('click', handleClick)
//document.getElementById('rstStock').addEventListener('click')
//document.getElementById('rstBtn').addEventListener('click')
cardOne.addEventListener('click', handleClickOne)

// Functions

init()

function init() {
  winner = false
  noMoreMoves = false
  // Initialize stock with array of 52 cards 
  stock = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  pyramidRender()
}

// Function to display shuffled cards on the pyramid
function pyramidRender() {
  for (let i = 0; i < 28; i++) {
    // Assigns random index to randCard
    let randCard = Math.floor(Math.random() * stock.length)
    // Assign card with the random index to a variable
    let cardGone = stock.splice(randCard, 1)[0]
    // Pushes that value into pyramid array
    pyramid.push(cardGone)
  }
  // Hard Code shuffled cards into the Pyramid
  card0El.classList.add(pyramid[0])
  card0El.classList.remove('outline')
  card1El.classList.add(pyramid[1])
  card1El.classList.remove('outline')
  card2El.classList.add(pyramid[2])
  card2El.classList.remove('outline')
  card3El.classList.add(pyramid[3])
  card3El.classList.remove('outline')
  card4El.classList.add(pyramid[4])
  card4El.classList.remove('outline')
  card5El.classList.add(pyramid[5])
  card5El.classList.remove('outline')
  card6El.classList.add(pyramid[6])
  card6El.classList.remove('outline')
  card7El.classList.add(pyramid[7])
  card7El.classList.remove('outline')
  card8El.classList.add(pyramid[8])
  card8El.classList.remove('outline')
  card9El.classList.add(pyramid[9])
  card9El.classList.remove('outline')
  card10El.classList.add(pyramid[10])
  card10El.classList.remove('outline')
  card11El.classList.add(pyramid[11])
  card11El.classList.remove('outline')
  card12El.classList.add(pyramid[12])
  card12El.classList.remove('outline')
  card13El.classList.add(pyramid[13])
  card13El.classList.remove('outline')
  card14El.classList.add(pyramid[14])
  card14El.classList.remove('outline')
  card15El.classList.add(pyramid[15])
  card15El.classList.remove('outline')
  card16El.classList.add(pyramid[16])
  card16El.classList.remove('outline')
  card17El.classList.add(pyramid[17])
  card17El.classList.remove('outline')
  card18El.classList.add(pyramid[18])
  card18El.classList.remove('outline')
  card19El.classList.add(pyramid[19])
  card19El.classList.remove('outline')
  card20El.classList.add(pyramid[20])
  card20El.classList.remove('outline')
  card21El.classList.add(pyramid[21])
  card21El.classList.remove('outline')
  card22El.classList.add(pyramid[22])
  card22El.classList.remove('outline')
  card23El.classList.add(pyramid[23])
  card23El.classList.remove('outline')
  card24El.classList.add(pyramid[24])
  card24El.classList.remove('outline')
  card25El.classList.add(pyramid[25])
  card25El.classList.remove('outline')
  card26El.classList.add(pyramid[26])
  card26El.classList.remove('outline')
  card27El.classList.add(pyramid[27])
  card27El.classList.remove('outline')
}

// Function to handle the Flip Card button click:

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

function handleClickOne(evt) {
  if (evt.target.classList.contains('sA' || 'cA' || 'hA' || 'dA')) cardOneVal = 1 
  else if (evt.target.classList.contains('s02' || 'c02' || 'h02' || 'd02')) cardOneVal = 2
  else if (evt.target.classList.contains('s03' || 'c03' || 'h03' || 'd03')) cardOneVal = 3
  else if (evt.target.classList.contains('s04' || 'c04' || 'h04' || 'd04')) cardOneVal = 4
  else if (evt.target.classList.contains('s05' || 'c05' || 'h05' || 'd05')) cardOneVal = 5
  else if (evt.target.classList.contains('s06' || 'c06' || 'h06' || 'd06')) cardOneVal = 6
  else if (evt.target.classList.contains('s07' || 'c07' || 'h07' || 'd07')) cardOneVal = 7
  else if (evt.target.classList.contains('s08' || 'c08' || 'h08' || 'd08')) cardOneVal = 8
  else if (evt.target.classList.contains('s09' || 'c09' || 'h09' || 'd09')) cardOneVal = 9
  else if (evt.target.classList.contains('s10' || 'c10' || 'h10' || 'd10')) cardOneVal = 10
  else if (evt.target.classList.contains('sJ' || 'cJ' || 'hJ' || 'dJ')) cardOneVal = 11
  else if (evt.target.classList.contains('sQ' || 'cQ' || 'hQ' || 'dQ')) cardOneVal = 12
  else if (evt.target.classList.contains('sK' || 'cK' || 'hK' || 'dK')) cardOneVal = 13

  console.log(cardOneVal)
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
  if (waste.length === 12) {
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
