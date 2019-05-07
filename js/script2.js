/*
 * Create a list that holds all of your cards
 */
let cardList = [
   'fa fa-diamond',
   'fa fa-diamond',
   'fa fa-paper-plane-o',
   'fa fa-paper-plane-o',
   'fa fa-anchor',
   'fa fa-anchor',
   'fa fa-bolt',
   'fa fa-bolt',
   'fa fa-cube',
   'fa fa-cube',
   'fa fa-leaf',
   'fa fa-leaf',
   'fa fa-bicycle',
   'fa fa-bicycle',
   'fa fa-bomb',
   'fa fa-bomb',
];

let arrayOfCards = [...cardList];
console.dir(arrayOfCards);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
const deck = document.querySelector('.deck');

function startGame() {
   const shuffleCards = shuffle(arrayOfCards);
   for (let c = 0; c < shuffleCards.length; c++) {
      const card = document.createElement('li');
      card.classList.add('card');
      // // add card content to the list
      card.innerHTML = `<i class='${arrayOfCards[c]}'></i>`;
      // append cardList to the parent
      deck.appendChild(card);
   }
   // click event
   clickCard();
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

/*
 * Set up the event listener for a card
 */
function clickCard() {
   deck.addEventListener('click', e => {
      const clickedCard = e.target;
      if (clickedCardCondition(clickedCard)) {
         // Display the card's symbol
         displayCard(clickedCard);
         // Add to openedCards
         toOpenedCards(clickedCard);
         // Shouldn't compare more than two cards
         if(openedCards.length === 2) {
            checkIfMatch(clickedCard);
            addMoves();
         }
      }
   });
}

/*
 * Check card conditions
 */
function clickedCardCondition(clickedCard) {
   return (
       clickedCard.classList.contains('card') &&
       !clickedCard.classList.contains('show') &&
       openedCards.length < 2 &&
       !openedCards.includes(clickedCard)
   )
}

/*
 * Display the card's symbol
 */
function displayCard(card) {
   card.classList.toggle('open');
   card.classList.toggle('show');
   console.log(card);
}

/*
 * Add to openedCards
 */
function toOpenedCards(card) {
   openedCards.push(card);
   console.log(openedCards);
}

/*
 * Add the card to a *list* of "open" cards
 */
let openedCards = [];

/*
 * Check if cards have a match
 */
function checkIfMatch() {
   if (openedCards[0].firstElementChild.className === openedCards[1].firstElementChild.className) {
      openedCards[0].classList.toggle('match');
      openedCards[1].classList.toggle('match');
      openedCards = [];
      console.log('Match');
   } else {
      setTimeout(() => {
         displayCard(openedCards[0]);
         displayCard(openedCards[1]);
         openedCards = [];
         console.log('No match');
      }, 1000);
   }
}

/*
 * Moves start point
 */
let moves = 0;

/*
 * Increment moves
 */
function addMoves() {
   const movesCounter = document.querySelector('.moves');
   movesCounter.innerHTML = moves;
   moves++;
   console.log('Moves ' + moves);
}

/*
 * Start game
 */
startGame();
