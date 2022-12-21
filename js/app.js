// Declare deck variables

let stock = [] // array to hold the cards in the stock pile
let waste = [] // array to hold the cards in the waste pile
let pyramid = [] // array to hold the shuffled cards in the pyramid
let cardOneVal // holds the value of the first card selected
let cardTwoVal // holds the value of the second card selected
let cardOneEl
let cardTwoEl
let cardSum // holds the sum of card 1 and card 2 to check if it equals 13
let winner // if the board is clear, winner = true
let noMoreMoves // if we've gone through the stock deck 3 times, noMoreMoves = true, game is over
let cardTurn // if this equals 1, then a click picks the first card, if it equals -1, a click picks the second card
let cardToRemove
let iteration
let resetCount = 2

// Cached element references

let stockEl = document.getElementById('stock') //variable to access the stock pile
let wasteEl = document.getElementById('waste') //variable to access the waste pile
let card = document.getElementById('pyramid') //variable to click a card in the pyramid
let stockRstCount = document.getElementById('stock-count')
let messageEl = document.getElementById('message')
let flipBtn = document.getElementById('flipBtn')
let rstStock = document.getElementById('rstStock')

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

flipBtn.addEventListener('click', handleClick) // event listener for Flip button
document.getElementById('rstBtn').addEventListener('click', refresh)
card.addEventListener('click', coveredCards) // event listener to call the turn() function, which calls the handleClick functions
rstStock.addEventListener('click', stockReset)

// Functions

// Refreshes the page when the reset game button is clicked
function refresh() {
  document.location.reload()
}

// invoke init() function
init()

//sets variables to starting state, fills the stock with cards, calls renderPyramid() function
function init() {
  winner = false
  noMoreMoves = false
  cardTurn = 1
  iteration = 0
  stockRstCount.textContent = '2'
  rstStock.setAttribute('disabled', '')
  // Initialize stock with array of 52 cards 
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
  for (let i = 0; i < 28; i++) {
    // Assigns random index to randCard
    let randCard = Math.floor(Math.random() * stock.length)
    // Assign card with the random index to a variable
    let cardGone = stock.splice(randCard, 1)[0]
    // Pushes that value into pyramid array
    pyramid.push(cardGone)
  }

  stockEl.classList.add(stock[iteration])

  // Hard Code shuffled cards into the Pyramid
  card0El.classList.add(pyramid[0])
  card1El.classList.add(pyramid[1])
  card2El.classList.add(pyramid[2])
  card3El.classList.add(pyramid[3])
  card4El.classList.add(pyramid[4])
  card5El.classList.add(pyramid[5])
  card6El.classList.add(pyramid[6])
  card7El.classList.add(pyramid[7])
  card8El.classList.add(pyramid[8])
  card9El.classList.add(pyramid[9])
  card10El.classList.add(pyramid[10])
  card11El.classList.add(pyramid[11])
  card12El.classList.add(pyramid[12])
  card13El.classList.add(pyramid[13])
  card14El.classList.add(pyramid[14])
  card15El.classList.add(pyramid[15])
  card16El.classList.add(pyramid[16])
  card17El.classList.add(pyramid[17])
  card18El.classList.add(pyramid[18])
  card19El.classList.add(pyramid[19])
  card20El.classList.add(pyramid[20])
  card21El.classList.add(pyramid[21])
  card22El.classList.add(pyramid[22])
  card23El.classList.add(pyramid[23])
  card24El.classList.add(pyramid[24])
  card25El.classList.add(pyramid[25])
  card26El.classList.add(pyramid[26])
  card27El.classList.add(pyramid[27])
}

// Function to determine if a card is covered up or not
function coveredCards(evt) {
  if (evt.target.id === 'p15') {                                                                      // Row 5 starts here
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
  } else if (evt.target.id === 'p10') {                                                               // Row 4 starts here
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
  } else if (evt.target.id === 'p6') {                                                                // Row 3 starts here
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
  } else if (evt.target.id === 'p3') {                                                                // Row 2 starts here 
    if (card6El.classList.contains('outline') && card7El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p4') {
    if (card7El.classList.contains('outline') && card8El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p5') {
    if (card8El.classList.contains('outline') && card9El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p1') {                                                                // Row 1 starts here 
    if (card3El.classList.contains('outline') && card4El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p2') {
    if (card4El.classList.contains('outline') && card5El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else if (evt.target.id === 'p0') {                                                                // Row 0 starts here
    if (card1El.classList.contains('outline') && card2El.classList.contains('outline')) turn(evt)
      else messageEl.textContent = `This Card is Covered Up, Choose New ${cardTurn === 1 ? 'First' : 'Second'} Card`
  } else {
    turn(evt)
  }
}

function turn(evt) {          //Switches turns between choosing the first card and second card
  if (cardTurn === 1) {
    cardOneEl = evt.target
    cardTurn = -1
    handleClickOne(evt)
  } else if (cardTurn === -1) {
    cardTwoEl = evt.target
    cardTurn = 1
    handleClickTwo(evt)
  } else return
  checkForWinner(cardOneVal, cardTwoVal)
  updateMessage()
}

// Function to handle the Flip Card button click:
function handleClick() {
  let cardPicked = stock[iteration]
  stockEl.classList.remove(stock[iteration])
  iteration++
  if (iteration < stock.length) {
    stockEl.classList.add(stock[iteration])
  } else {
    if (resetCount > 0) {
      stockEl.classList.add('outline')
      iteration = 0
      messageEl.textContent = "The Stock Deck is Empty, Press the 'Reset Stock' Button"
      flipBtn.setAttribute('disabled', '')
      rstStock.removeAttribute('disabled')
    } else {
      stockEl.classList.add('outline')
      noMoreMoves = true
      flipBtn.setAttribute('disabled', '')
      updateMessage()
    }
  }
  // Add card picked to waste deck
  waste.push(cardPicked)
  // Pass card picked to render function to display
  renderDeck(cardPicked)
}

function stockReset() {
  stock = waste
  waste = []
  wasteEl.classList = 'card small outline'
  stockEl.classList.remove('outline')
  stockEl.classList.add(stock[0])
  resetCount--
  stockRstCount.textContent = resetCount.toString()
  flipBtn.removeAttribute('disabled')
  rstStock.setAttribute('disabled', '')
}

//Function to handle clicking on your first card
function handleClickOne(evt) {
  //sets cardIdx to the card type based on the class
  let cardIdx = evt.target.classList.value.substring(12)
  //if else statements determining what numeric value to assign the card picked
  if (cardIdx === 'A') cardOneVal = 1 
  else if (cardIdx === '10') cardOneVal = 10
  else if (cardIdx === 'J') cardOneVal = 11
  else if (cardIdx === 'Q') cardOneVal = 12
  //if the card is a King, run the isKing() function to clear that card and start over on 1st card choice
  else if (cardIdx === 'K') {
    isKing()
  } else if (parseInt(cardIdx, 10) < 10) {
    let stringVal = evt.target.classList.value.substring(13)
    cardOneVal = parseInt(stringVal, 10)
  }
  else {
    return
  }
  console.log("1:", cardOneVal)
  return cardOneVal
}

//Function to handle clicking on your second card
function handleClickTwo(evt) {
  //sets cardIdx to the card type based on the class
  let cardIdx = evt.target.classList.value.substring(12)
  //if else statements determining what numeric value to assign the card picked
  if (cardIdx === 'A') cardTwoVal = 1 
  else if (cardIdx === '10') cardTwoVal = 10
  else if (cardIdx === 'J') cardTwoVal = 11
  else if (cardIdx === 'Q') cardTwoVal = 12
  else if (cardIdx === 'K') cardTwoVal = 13
  else if (parseInt(cardIdx, 10) < 10) {
    let stringVal = evt.target.classList.value.substring(13)
    cardTwoVal = parseInt(stringVal, 10)
  }
  else {
    return
  }
  console.log("2:", cardTwoVal)
  return cardTwoVal
}

// Function to render deck state
function renderDeck(cardPicked) {
	// Remove outline class when first card is picked
  if (waste.length === 1) {
    wasteEl.classList.remove('outline')
  }
  // Removes previous picked card from waste deck class list
  if (waste.length > 1) {
    wasteEl.classList.remove(cardToRemove)
  }
  // Set card to be removed on next click
  cardToRemove = cardPicked
  // Add current card picked to waste deck element
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

// Function to clear a King card and go back to first card choice
function isKing() {
  cardTurn = 1
  cardOneEl.classList = 'card small outline'
}

// Function checks to see if cards add up to 13 and if the board is cleared
function checkForWinner(card1, card2) {
  cardSum = card1 + card2
  if (cardSum === 13) {
    clearCards()
  } else {
    return
  }
  if (card0El.classList.contains('outline')) {
    winner = true
    flipBtn.setAttribute('disabled', '')
    rstStock.setAttribute('disabled', '')
    updateMessage()
  }
  //this resets the card values to 0 after being checked, otherwise it could have lingering affects if new card1 equals 13 with old card2
  cardOneVal = 0
  cardTwoVal = 0
}

// clearCards() function clears the cards if they add up to 13
function clearCards() {
  cardOneEl.classList = 'card small outline'
  cardTwoEl.classList = 'card small outline'
}

// renders the state of the game through on-screen messages
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
