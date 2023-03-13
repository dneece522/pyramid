// <---------------------------------------------- Declare deck variables ---------------------------------------------->

// array to hold the cards in the stock pile
let stock = []
// array to hold the cards in the waste pile
let waste = []
// array to hold the shuffled cards in the pyramid
let pyramid = []
// holds the numeric value of the first card selected
let cardOneVal
// holds the numeric value of the second card selected
let cardTwoVal
// holds the cached DOM element of the first card selected 
let cardOneEl
// holds the cached DOM element of the second card selected
let cardTwoEl
// holds the sum of card 1 and card 2 to check if it equals 13
let cardSum
// if the board is clear, winner = true
let winner
// if we've gone through the stock deck 3 times, noMoreMoves = true, game is over
let noMoreMoves
// if this equals 1, then a click picks the first card, if it equals -1, a click picks the second card
let cardTurn
// used in the renderDeck function to hold the value of the card previously on the waste deck
let cardToRemove
// used throughout the program to keep count of how many times the user has gone through the stock deck
let iteration
// keeps track of how many times the stock deck has been reset
let resetCount

// <---------------------------------------------- Cached element references ---------------------------------------------->

// variable to access the stock pile
let stockEl = document.getElementById('stock')
// variable to access the waste pile
let wasteEl = document.getElementById('waste')
// variable to click a card in the pyramid
let card = document.getElementById('pyramid')
// used to render the amount of stock resets remaining
let stockRstCount = document.getElementById('stock-count')
// used to render messages on the screen
let messageEl = document.getElementById('message')
// button used to flip cards from the stock to waste pile
let flipBtn = document.getElementById('flip-btn')
// button used to reset the stock when it reaches the end
let rstStock = document.getElementById('rst-stock')
// used to listen if either the stock or waste pile is clicked
let container = document.getElementById('container')
// button used to reset the game
let newGameBtn = document.getElementById('rst-btn')
// plays jingle bell sound when cards clear
let jingleBells = new Audio('../assets/jingle-bells.mp3')
// DOM element for the pop-up modal
let modal = document.getElementById('myModal')
// instructions button to make the modal pop up
let modalBtn = document.getElementById('modalBtn')
// X-button on the modal to close the modal
let span = document.getElementsByClassName('close')[0]

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
// array to hold each card element in the pyramid, used to set the board using a loop
let cachedCardsArray = [card0El, card1El, card2El, card3El, card4El, card5El, card6El, card7El, card8El, card9El, card10El, card11El, card12El, card13El, card14El, card15El,card16El, card17El, card18El, card19El, card20El, card21El, card22El, card23El, card24El, card25El, card26El, card27El]

// <---------------------------------------------- Event listeners ---------------------------------------------->

// event listener for Flip button
flipBtn.addEventListener('click', handleClick)
// listens for when the New Game button is clicked
newGameBtn.addEventListener('click', init)
// event listener to call the coveredCards() function, which calls the handleClick functions
card.addEventListener('click', coveredCards)
// listens for when the Reset Stock button is clicked
rstStock.addEventListener('click', stockReset)
// listens to when a stock card is clicked
stockEl.addEventListener('click', turn)
// listens to when a waste card is clicked
wasteEl.addEventListener('click', turn)
// listens for the 'Instructions' button to be clicked
modalBtn.addEventListener('click', () => {
  modal.style.display = 'block'
})
// listens for the X-button on the modal to be clicked
span.addEventListener('click', () => {
  modal.style.display = 'none'
})
// listens for anywhere on the screen except the modal to be clicked
window.addEventListener('click', (evt) => {
  if (evt.target == modal) {
    modal.style.display = 'none'
  }
})

// <---------------------------------------------- Functions ---------------------------------------------->

// invoke init() function
init()

// sets variables to starting state, fills the stock with cards, calls renderPyramid() function
function init() {
  // setting all of the variable states to start the game
  pyramid = []
  winner = false
  noMoreMoves = false
  cardTurn = 1
  iteration = 0
  resetCount = 2
  // renders the number of stock resets left for the user
  stockRstCount.textContent = '2'
  // disables the Reset Stock button until the user has gone all the way through the stock pile
  rstStock.setAttribute('disabled', '')
  // initialize stock with array of 52 cards 
  stock = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  // This for loop below shuffles the stock array above (shuffles the deck) when the game initializes (credit to stackoverflow.com)
  for (let i = stock.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = stock[i]
    stock[i] = stock[j]
    stock[j] = temp
  }
  pyramidRender()
}

// Function to display shuffled cards on the pyramid
function pyramidRender() {
  // picks 28 random cards out of shuffled deck to populate the pyramid
  for (let i = 0; i < 28; i++) {
    // Assigns random index to randCard
    let randCard = Math.floor(Math.random() * stock.length)
    // Assign card with the random index to a variable
    let cardGone = stock.splice(randCard, 1)[0]
    // Pushes that value into pyramid array
    pyramid.push(cardGone)
  }
  // displays the first card in the stock array on the stock pile (iteration = 0)
  stockEl.classList = `card small ${stock[iteration]}`
  // For loop to add shuffled cards into the Pyramid
  for (let i = 0; i < cachedCardsArray.length; i++) {
    cachedCardsArray[i].classList = `card small ${pyramid[i]}`
  }
}

// Function to determine if a card is covered up or not
function coveredCards(evt) {
  // Row 5 starts here
  if (evt.target.id === 'p15') {
    if (card21El.classList.contains('outline') && card22El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p16') {
    if (card22El.classList.contains('outline') && card23El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p17') {
    if (card23El.classList.contains('outline') && card24El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p18') {
    if (card24El.classList.contains('outline') && card25El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p19') {
    if (card25El.classList.contains('outline') && card26El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p20') {
    if (card26El.classList.contains('outline') && card27El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  // Row 4 starts here
  } else if (evt.target.id === 'p10') {
    if (card15El.classList.contains('outline') && card16El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p11') {
    if (card16El.classList.contains('outline') && card17El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p12') {
    if (card17El.classList.contains('outline') && card18El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p13') {
    if (card18El.classList.contains('outline') && card19El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p14') {
    if (card19El.classList.contains('outline') && card20El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  // Row 3 starts here
  } else if (evt.target.id === 'p6') {
    if (card10El.classList.contains('outline') && card11El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p7') {
    if (card11El.classList.contains('outline') && card12El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p8') {
    if (card12El.classList.contains('outline') && card13El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p9') {
    if (card13El.classList.contains('outline') && card14El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  // Row 2 starts here
  } else if (evt.target.id === 'p3') {
    if (card6El.classList.contains('outline') && card7El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p4') {
    if (card7El.classList.contains('outline') && card8El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p5') {
    if (card8El.classList.contains('outline') && card9El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  // Row 1 starts here
  } else if (evt.target.id === 'p1') {
    if (card3El.classList.contains('outline') && card4El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p2') {
    if (card4El.classList.contains('outline') && card5El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  // Row 0 starts here
  } else if (evt.target.id === 'p0') {
    if (card1El.classList.contains('outline') && card2El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.classList.contains('rows')) {
    return
  } else turn(evt)
}

// Switches turns between choosing the first card and second card
function turn(evt) {
  // if cardTurn = 1, then choose the first card
  if (cardTurn === 1) {
    // set cardOneEl equal to the DOM element of the first card selected
    cardOneEl = evt.target
    // changes the turn to pick the second card
    cardTurn = -1
    // call handleClickOne function
    handleClickOne(evt)
  // if cardTurn = -1, then choose the second card
  } else if (cardTurn === -1) {
    // set cardTwoEl equal to the DOM element of the second card selected
    cardTwoEl = evt.target
    // changes the turn back to pick the first card
    cardTurn = 1
    // call handleClickTwo function
    handleClickTwo(evt)
  } else return
  // send the numeric values from cards 1 and 2 to checkForWinnder() to see if they equal 13
  checkForWinner(cardOneVal, cardTwoVal)
  // render any changes to the screen in the form of a message
  updateMessage()
}

// Function to handle the Flip Card button click:
function handleClick() {
  // set cardPicked equal to the current card shown in the stock pile (array)
  let cardPicked = stock[iteration]
  // add 1 to the iteration count
  iteration++
  // if the length of the stock array is greater than the iteration count
  if (iteration < stock.length) {
    stockEl.classList = `card small ${stock[iteration]}`
  } else {
    // while resetCount is greater than 0, but iteration is equal to stock.length, add an outline to the stock deck, set iteration
    if (resetCount > 0) {
      stockEl.classList = 'card small outline'
      iteration = 0
      messageEl.textContent = "The Stock Deck is Empty, Press the 'Reset Stock' Button"
      flipBtn.setAttribute('disabled', '')
      rstStock.removeAttribute('disabled')
    } else {
      stockEl.classList = 'card small outline'
      noMoreMoves = true
      flipBtn.setAttribute('disabled', '')
      updateMessage()
    }
  }
  // Add cardPicked to waste deck
  waste.push(cardPicked)
  // Pass cardPicked to render function to display
  wasteEl.classList = `card small ${cardPicked}`
}

// This is called when user clicks the Reset Stock button
function stockReset() {
  // clear the waste array
  waste = []
  // set the waste deck to a card outline
  wasteEl.classList = 'card small outline'
  // add the first card in the stock array to the stock class list
  stockEl.classList = `card small ${stock[0]}`
  // subtract 1 from the resetCount
  resetCount--
  // diplay the resetCount value on the screen in the form of a string
  stockRstCount.textContent = resetCount.toString()
  // unlock the Flip Card button
  flipBtn.removeAttribute('disabled')
  // lock the Reset Stock button
  rstStock.setAttribute('disabled', '')
  updateMessage()
}

// Function to handle clicking on your first card
function handleClickOne(evt) {
  let cardIdx    
  let stringVal
  // removes the first 12 characters of the class list string from the first card clicked
  cardIdx = evt.target.classList.value.substring(12)
  // if the remaining character is an 'A' (ace), set cardOneVal = 1
  if (cardIdx === 'A') cardOneVal = 1
  // if the remaining character(s) is a '10', set cardOneVal = 10
  else if (cardIdx === '10') cardOneVal = 10
  // if the remaining character is a 'J', set cardOneVal = 11
  else if (cardIdx === 'J') cardOneVal = 11
  // if the remaining character is a 'Q', set cardOneVal = 12
  else if (cardIdx === 'Q') cardOneVal = 12
  // if the card is a King, run the isKing() function to clear that card and start over on 1st card choice
  else if (cardIdx === 'K') {
    isKing()
  // if the character is a '02' through '09', remove the 0 and set cardOneVal to its respected number 
  } else if (parseInt(cardIdx, 10) < 10) {
    stringVal = evt.target.classList.value.substring(13)
    cardOneVal = parseInt(stringVal, 10)
  }
  else {
    return
  }
  return cardOneVal
}

// Function to handle clicking on your second card
function handleClickTwo(evt) {
  let cardIdx
  let stringVal
  // removes the first 12 characters of the class list string from the second card clicked
  cardIdx = evt.target.classList.value.substring(12)
  // if else statements determining what numeric value to assign the card picked, same as handleClickOne()
  if (cardIdx === 'A') cardTwoVal = 1 
  else if (cardIdx === '10') cardTwoVal = 10
  else if (cardIdx === 'J') cardTwoVal = 11
  else if (cardIdx === 'Q') cardTwoVal = 12
  // no isKing() function here, you can only clear a King on the first click
  else if (cardIdx === 'K') cardTwoVal = 13
  // same as handleClickOne()
  else if (parseInt(cardIdx, 10) < 10) {
    stringVal = evt.target.classList.value.substring(13)
    cardTwoVal = parseInt(stringVal, 10)
  }
  else {
    return
  }
  return cardTwoVal
}

/*
The way the stock and waste array works: The stock array begins with 24 cards (elements) leftover from the pyramid array, and the waste array starts empty []. Every time the flip card button is clicked, iteration goes up by one (iteration++), and that iterates through the stock array to access each card when the button is clicked. When the button is clicked, the card previously displayed on top of the stock deck is pushed into the waste array. So as the user iterates through the stock array, they are aslo adding each element to the waste array. So when a card is cleared from the stock deck, it must be deleted from the stock array, but when a card is cleared from the waste deck, that element has to be deleted from the waste array and also the stock array. That's what I'm doing in the isKing() and clearCards() functions.
*/

// Function to clear a King card and go back to first card choice
function isKing() {
  // if card one is a King from the stock pile...
  if (cardOneEl.id === 'stock') {
    // set the cardTurn back to 1
    cardTurn = 1
    // remove the above card class from the stock array
    stock.splice(iteration, 1)
    // add the new card clas from the array (next element in the array since the previous one was just spliced out)
    stockEl.classList = `card small ${stock[iteration]}`
  // if card one is a King from the waste pile...
  } else if (cardOneEl.id === 'waste') {
    // set the cardTurn back to 1
    cardTurn = 1
    // remove last element from waste array, which is the card at the top of the deck that was just cleared
    waste.pop()
    // remove element from stock array that was previously at the top of stock (but then was cleared from top of waste)
    stock.splice(waste.length, 1)
    stockEl.classList = `card small ${stock[waste.length]}`
    if (waste.length === 0) wasteEl.classList = 'card small outline'
    else wasteEl.classList = `card small ${waste[waste.length - 1]}`
  } else {
    if (cardOneEl.id === 'p0') {
      cardOneEl.classList = 'card small outline' 
      winner === true
      flipBtn.setAttribute('disabled', '')
      rstStock.setAttribute('disabled', '')
      updateMessage() 
    } else {
      cardTurn = 1
      // if from the pyramid, just remove the card and add an outline
      cardOneEl.classList = 'card small outline'
    }
  }
  jingleBells.volume = .25
  jingleBells.play()
}

// Function checks to see if cards add up to 13 and if the board is cleared
function checkForWinner(card1, card2) {
  cardSum = card1 + card2
  // This is all pretty straight forward, checks to see if the 2 cards clicked are eligible to be cleared
  if (cardSum === 13) {
    clearCards()
  } else {
    return
  }
  // Here's the winning condition, if the top card in the pyramid (card0El) contains an outline class (has been cleared), then
  if (card0El.classList.contains('outline')) {
    // winner is set to true
    winner = true
    // Flip Card and Reset Stock buttons are disabled
    flipBtn.setAttribute('disabled', '')
    rstStock.setAttribute('disabled', '')
    updateMessage()
  }
  // this resets the card values to 0 after being checked, otherwise it could have lingering affects if new card1 equals 13 with old card2
  cardOneVal = 0
  cardTwoVal = 0
}

// clearCards() function clears the cards if they add up to 13
function clearCards() {
  // if card 1 is from the stock deck and card 2 is from the pyramid
  if (cardOneEl.id === 'stock' && cardTwoEl.id !== 'stock' && cardTwoEl.id !== 'waste') {
    stock.splice(iteration, 1)
    stockEl.classList = `card small ${stock[iteration]}` 
    cardTwoEl.classList = 'card small outline'
  // if card 1 is from the pyramid and card 2 is from the stock deck
  } else if (cardOneEl.id !== 'stock' && cardOneEl.id !== 'waste' && cardTwoEl.id === 'stock') {
    stock.splice(iteration, 1)
    stockEl.classList = `card small ${stock[iteration]}`
    // same as above, but clears cardOne from the pyramid
    cardOneEl.classList = 'card small outline'
  // if card 1 is from the waste deck and card 2 is from the pyramid
  } else if (cardOneEl.id === 'waste' && cardTwoEl.id !== 'stock' && cardTwoEl.id !== 'waste') {
    waste.pop()
    stock.splice(waste.length, 1)
    stockEl.classList = `card small ${stock[waste.length]}`
    if (waste.length === 0) wasteEl.classList = 'card small outline'
    else wasteEl.classList = `card small ${waste[waste.length - 1]}`
    cardTwoEl.classList = 'card small outline'
  // if card 1 is from the pyramid and card 2 is from the waste deck
  } else if (cardOneEl.id !== 'stock' && cardOneEl.id !== 'waste' && cardTwoEl.id === 'waste') {
    waste.pop()
    stock.splice(waste.length, 1)
    stockEl.classList = `card small ${stock[waste.length]}`
    if (waste.length === 0) wasteEl.classList = 'card small outline'
    else wasteEl.classList = `card small ${waste[waste.length - 1]}`
    // same as above, but clears cardOne from the pyramid
    cardOneEl.classList = 'card small outline'
  // if both cards are from stock or waste deck
  } else if ((cardOneEl.id === 'stock' || cardOneEl.id === 'waste') && (cardTwoEl.id === 'stock' || cardTwoEl.id === 'waste')) {
    // would like to allow user to clear cards from stock and waste pile on one turn eventually, but has no affect on gameplay
    return
  // if both cards are from the pyramid, clear them both
  } else {
    cardOneEl.classList = 'card small outline'
    cardTwoEl.classList = 'card small outline'
  }
  jingleBells.volume = .25
  jingleBells.play()
}

// renders the state of the game through on-screen messages, self-explanatory
function updateMessage() {
  if (winner === false && noMoreMoves === false) {
    messageEl.textContent = `Choose Your ${cardTurn === 1 ? "First" : "Second"} Card`
  } else if (winner === true) {
    messageEl.textContent = "Congratulations! You Win!"
  } else if (winner === false && noMoreMoves === true) {
    messageEl.textContent = "Sorry, you're all out of moves!"
  } else {
    return
  }
}