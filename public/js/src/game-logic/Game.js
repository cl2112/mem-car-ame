import cardRefs from "../data/card-refs.js";

function Game() {
    (this.state = {
        hasStarted: false
    }),
        (this.initialize = function() {
            this.state = {
                timer: 60,
                numberOfPairs: 4,
                correctMatches: 0,
                cardFronts: cardRefs,
                cardFlipped: [],
                cardsObjects: [],
                hasStarted: true
            };

            this.render();
        }),
        (this.createCards = function() {
            const cards = [];
            const fronts = this.state.cardFronts;
            const pairs = this.state.numberOfPairs;
            const cardsPicked = pickCardsToUse();

            // picks the cards to be used in play and fills the cards array.
            function pickCardsToUse() {
                // Used to store the cards already selected to avoid duplicates.
                const cardsPicked = [];

                while (cardsPicked.length < pairs) {
                    const randomNumber = Math.floor(
                        Math.random() * fronts.length
                    );

                    if (!cardsPicked.includes(randomNumber)) {
                        cardsPicked.push(randomNumber);
                    }
                }

                return cardsPicked.map(v => {
                    return fronts[v];
                });
            }

            function fillCards() {
                // choose a random image from the cardFronts array
                const randomImage =
                    cardsPicked[Math.floor(Math.random() * cardsPicked.length)];

                const dupes = cards.reduce((acc, v) => {
                    if (v === randomImage) {
                        return acc + 1;
                    } else {
                        return acc;
                    }
                }, 0);

                if (dupes < 2) {
                    cards.push(randomImage);

                    if (cards.length < pairs * 2) {
                        fillCards();
                    } else {
                        return cards;
                    }
                } else {
                    fillCards();
                }
            }

            fillCards();

            return cards;
        }),
        (this.render = function() {
            const cards = this.createCards();

            const menuWrapper = document.querySelector(".menu-wrapper");

            // remove any previous buttons
            menuWrapper
                .querySelectorAll("div")
                .forEach(v => menuWrapper.removeChild(v));

            const cardWrapper = document.createElement("div");
            cardWrapper.classList.add("card-wrapper");
            document.querySelector(".container").appendChild(cardWrapper);

            cards.forEach((v, i) => {
                const cardBack = document.createElement("div");
                const cardFront = document.createElement("div");
                const card = document.createElement("div");

                cardFront.style.backgroundImage = `url("./images/card-images/${v}")`;
                cardFront.classList.add("card-front");

                card.classList.add("card");
                card.dataset.name = v;

                cardBack.classList.add("card-back");

                card.appendChild(cardBack);
                card.appendChild(cardFront);

                console.log(card);

                cardWrapper.appendChild(card);

                document
                    .querySelectorAll(".card")
                    [i].addEventListener("click", e => {
                        this.checkGameState(e);
                    });
            });
        }),
        (this.checkGameState = function(event) {
            console.log("check game state");

            let thisElement = event.target;

            // Check if the event.target is the card-front/card-back or the card div.
            if (thisElement.classList.contains("card")) {
                thisElement.classList.toggle("card-flipped");
            } else {
                thisElement.parentElement.classList.toggle("card-flipped");
                thisElement = thisElement.parentElement;
            }

            if (this.state.cardFlipped.length === 0) {
                this.state.cardFlipped.push(thisElement);
            } else {
                if (
                    thisElement.dataset.name ===
                    this.state.cardFlipped[0].dataset.name
                ) {
                    console.log("Correct!");

                    thisElement.style.visibility = "hidden";
                    this.state.cardFlipped[0].style.visibility = "hidden";
                    this.state.cardFlipped = [];
                } else {
                    console.log("Wrong!");
                    setTimeout(() => {
                        thisElement.classList.toggle("card-flipped");
                        this.state.cardFlipped[0].classList.toggle(
                            "card-flipped"
                        );
                        this.state.cardFlipped = [];
                    }, 1000);
                }
            }
        });
}

export default Game;
