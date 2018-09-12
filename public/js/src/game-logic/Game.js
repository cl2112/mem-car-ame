import cardRefs from '../data/card-refs.js';

const Game = {
    state: {
        hasStarted: false
    },

    initialize: function() {
        this.state = {
            timer: 60,
            numberOfPairs: 4,
            correctMatches: 0,
            cardFronts: cardRefs,
            cardFlipped: "",
            cardsObjects: [],
            hasStarted: true
        };

        this.render();
    },

    createCards: function() {
        const cards = [];
        const fronts = this.state.cardFronts;
        const pairs = this.state.numberOfPairs;
        const cardsPicked = pickCardsToUse();

        // picks the cards to be used in play and fills the cards array.
        function pickCardsToUse() {
            // Used to store the cards already selected to avoid duplicates.
            const cardsPicked = [];

            while (cardsPicked.length < pairs) {
                const randomNumber = Math.floor(Math.random() * fronts.length);

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
    },

    render: function() {
        const cards = this.createCards();

        cards.forEach((v, i) => {
            const cardBack = document.createElement("div");
            const cardFront = document.createElement("div");
            const card = document.createElement("div");

            cardFront.style.backgroundImage = `url("./images/card-images/${v}")`;
            cardFront.classList.add("card-front");

            card.classList.add("card");

            cardBack.classList.add("card-back");

            card.appendChild(cardBack);
            card.appendChild(cardFront);

            console.log(card);

            document.querySelector(".wrapper").appendChild(card);

            document
                .querySelectorAll(".card")
                [i].addEventListener("click", function() {
                    console.log(this);
                    this.classList.toggle("card-flipped");
                });
        });

        // document.querySelector(".card").addEventListener("click", function() {
        //     console.log(this)
        //     this.classList.toggle("card-flipped");
        // });
    },

    checkGameState: function() {}
};

module.exports = Game;