/*
 * Create a list that holds all of your cards
 */
let cards = document.getElementsByClassName('card');
let cardList = [...cards];
console.log(cardList);

/* 
* Display the cards on the page after click event
*/
let displayCard = function() {
    this.classList.toggle('open');
    this.classList.toggle('show');
    this.classList.toggle('closed');
}

for (let i = 0; i < cardList.length; i++) {
    cardList[i].addEventListener('click', displayCard);
    console.log(this.displayCard);
}

/*
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
let cardDeck = document.querySelector('.deck');
function initiate() {
cardsShuffed = shuffle(cardList);
console.log(cardsShuffed);
    for (let i = 0; i < cardsShuffed.length; i++) {
        [].forEach.call(cardsShuffed, function(data) {
            cardDeck.appendChild(data);
        });
    }
}

window.onload = initiate();

/*
* @description: Shuffle function from http: //stackoverflow.com/a/2450976
* ES6 method applied
*/
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], [array[i]]];
    }
};

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
