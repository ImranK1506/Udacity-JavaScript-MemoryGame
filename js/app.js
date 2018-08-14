// /*
//  * @Description: Array of card items
//  */
// // const cardList = [
// //     'fa-diamond',
// //     'fa-paper-plane-o',
// //     'fa-anchor',
// //     'fa-bolt',
// //     'fa-cube',
// //     'fa-leaf',
// //     'fa-bicycle',
// //     'fa-bomb',
// // ];
//
// /*
//  * Create a list that holds all of your cards
//  */
// let card = document.getElementsByClassName('card');
// let cardList = [...card];
// console.log(cardList);
//
// // /*
// // * Display the cards on the page on click event
// // */
// const display = function(toggled) {
//     this.classList.toggle('open');
//     this.classList.toggle('show');
//     this.classList.toggle('closed');
//     console.dir('clicked on the tile' + ' ' + toggled);
// };
//
// for (let i = 0; i < cardList.length; i++) {
//     cardList[i].addEventListener('click', display);
//     // console.log(cardList);
// }
//
// /*
//  *   - shuffle the list of cards using the provided "shuffle" method below
//  *   - loop through each card and create its HTML
//  *   - add each card's HTML to the page
//  */
// let cardDeck = document.querySelector('.deck');
// function initiate() {
// cardsShuffed = shuffle(cardList);
// console.log(cardsShuffed);
//     for (let i = 0; i < cardsShuffed.length; i++) {
//         [].forEach.call(cardsShuffed, function(data) {
//             cardDeck.appendChild(data);
//         });
//     }
// }
//
// window.onload = initiate();
//
// /*
// * @description: Shuffle function from http: //stackoverflow.com/a/2450976
// * ES6 method applied
// */
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], [array[i]]];
//     }
// }
//
// /*
//  * set up the event listener for a card. If a card is clicked:
//  *  - display the card's symbol (put this functionality in another function that you call from this one)
//  *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
//  *  - if the list already has another card, check to see if the two cards match
//  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
//  *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
//  *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
//  */
//
//
//
// /*
//  * @description: function for match between cards.
//  */
// function match() {
//     openedCards[0].classList.add('match');
//     openedCards[1].classList.add('match');
//     openedCards[0].classList.add('show', 'open');
//     openedCards[1].classList.add('show', 'open');
//
//     openedCards = [];
// }
//
// /*
//  * @description: function for unmatch between cards.
//  */
// function unmatch() {
//     openedCards[0].classList.add('unmatched');
//     openedCards[1].classList.add('unmatched');
//     disable();
//
// // Timeout after clicking on card
//     setTimeout(function() {
//         openedCards[0].classList.remove('show','open', 'unmatched');
//         openedCards[1].classList.remove('show','open', 'unmatched');
//         enable();
//         openedCards = [];
//     }, 1000);
//
// // Disable cards
//     function disable() {
//         Array.prototype.flter.call(cardList, function(card) {
//             card.classList.add('closed');
//         })
//     }
// // Enable cards
//     function enable() {
//         Array.prototype.filter.call(cardList, function(card) {
//             card.classList.remove('closed');
//             for (let i = 0; i < match.length; i++) {
//                 match[i].classList.add('closed')
//             }
//         });
//     }
// }
//
//
// /*
//  * @description: function for mismatch between cards.
//  */
// function checkOnClick() {
//     openCards.push(this);
//     let cardLength = openCard.length;
//
//     if (cardLength === 2) {
//         flipCard();
//         if (openedCards[0].type === openedCards[1].type) {
//             matchFound();
//         } else {
//             noMatch();
//         }
//     }
// }
//
