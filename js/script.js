/*
 * Create a list that holds all of your cards
 */

const cardList = [
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

console.dir(cardList);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

const deck = document.querySelector('.deck');

// Store clicked card in an empty array
let openedCards = [];

// Loop over the cardList
for (let i = 0; i < cardList.length; i++) {
    const card = document.createElement('li');
    card.classList.add('card');

// add card content to the list using back tick or template literals
    card.innerHTML = `<i class='${cardList[i]}'></i>`;
// append cardList to the parent with the card argument
    deck.appendChild(card);

// add event listener with click on each card
    card.addEventListener('click', function() {

        const currentCard = this;
        const previousCard = openedCards[0];
        // opened cards
        if (openedCards.length === 1) {
            // add open and show class than push cardList to the empty array
            card.classList.add('open', 'show');
            openedCards.push(this);

            // compare cards
            if (currentCard.innerHTML === previousCard.innerHTML) {

                currentCard.classList.add('match');
                previousCard.classList.add('match');

                console.log('Match');

            } else {
                console.log('No match');
            }

        } else {
        // unopened cards
            card.classList.add('open', 'show');
            openedCards.push(this);
        }
    })
}


// Shuffle function from http://stackoverflow.com/a/2450976
// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;
//
//     while (currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
//
//     return array;
// }


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