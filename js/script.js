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
let matchedCards = [];

function startGame() {
    const cards = shuffle(cardList);
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('li');
        card.classList.add('card');

    // add card content to the list using back tick or template literals
        card.innerHTML = `<i class='${cardList[i]}'></i>`;
    // append cardList to the parent with the card argument
        deck.appendChild(card);

    // click event on cards
        onClick(card);
    }
}

// Shuffle function from http://stackoverflow.com/a/2450976
// Using ES6 method

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
function onClick(card) {
    card.addEventListener('click', function() {

        const currentCard = this;
        const previousCard = openedCards[0];

        // opened cards
        if (openedCards.length === 1) {
            // add open and show class than push cardList to the empty array
            card.classList.add('open', 'show', 'disable');
            openedCards.push(this);

            // compare cards
            compareCards(currentCard, previousCard);

        } else {
            // unopened cards
            card.classList.add('open', 'show', 'disable');
            openedCards.push(this);
        }
    });
}

/*
 * Compare cards
 */
function compareCards(currentCard, previousCard) {
    if (currentCard.innerHTML === previousCard.innerHTML) {

        currentCard.classList.add('match');
        previousCard.classList.add('match');

        matchedCards.push(currentCard, previousCard);
        // reset opened cards history
        openedCards = [];

        console.log('Match');

        // Game end after all cards are matched
        endGame();

        } else {
        // Gives time to see the cards even when there is no match
        setTimeout(function() {
            currentCard.classList.remove('open', 'show', 'disable');
            previousCard.classList.remove('open', 'show', 'disable');
            console.log('No match');
            // reset opened cards history
            openedCards = [];
        }, 500);
    }

    // Add moves after comparison
    addMove();
}

/*
 * Rating
 */
const starsCounter = document.querySelector('.stars');
const starImage = `<li><i class="fa fa-star"></i></li>`;
starsCounter.innerHTML = starImage + starImage + starImage;
function rating() {
    if (moves <= 10 ) {
        starsCounter.innerHTML = starImage + starImage + starImage;
    } else if (moves <= 15) {
        starsCounter.innerHTML = starImage + starImage;
    } else {
        starsCounter.innerHTML = starImage;
    }
}

/*
 * Moves
 */
const movesCounter = document.querySelector('.moves');
// dynamic start point
movesCounter.innerHTML = 0;
let moves = 0;
function addMove() {
    moves++;
    movesCounter.innerHTML = moves;
    console.log('Moves:' + ' ' + moves);

    // Set Rating
    rating();
}

/*
 * Reset button
 */
const restart = document.querySelector('.restart');
restart.addEventListener('click', function() {
    // empty cardList
    deck.innerHTML = '';
    console.log('Cards have been reset!' + ' ' + deck.innerHTML);

   // rebuilt cardList array
    startGame();

    // reset cardList array
    matchedCards = [];

    // update moves counter
    moves = 0;
    movesCounter.innerHTML = moves;

    // reset stars to 3 after reset
    starsCounter.innerHTML = starImage + starImage + starImage;;
});

/*
 * Start game
 */
startGame();

/*
 * End game with message
 */
function endGame() {
    if (matchedCards.length === cardList.length) {
        alert('Good Game! Your total score:' + ' ' + moves );
    }
}