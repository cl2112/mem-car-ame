// document.querySelector('.card').addEventListener('click', ()=>{
//     this.classList.toggle('card-flipped');
// })

document.querySelector("button").addEventListener("click", () => {
    if (!Game.state.hasStarted) {
        Game.initialize();
    }
});

const Game = {
    state: {
        hasStarted: false
    },

    initialize: function() {
        this.state = {
            timer: 60,
            numberOfPairs: 4,
            correctMatches: 0,
            cardFronts: [
                "angel-1.png",
                "angel-2.png",
                "angel-3.png",
                "angel-4.png"
            ],
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

        function fillCards() {
            // choose a random image from the cardFronts array
            const randomImage =
                fronts[Math.floor(Math.random() * fronts.length)];

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

        cards.forEach((v,i) => {
            const cardBack = document.createElement("div");
            const cardFront = document.createElement("div");
            const card = document.createElement("div");

            cardFront.style.backgroundImage = `url(./images/cards/${v})`;
            cardFront.classList.add("card-front");

            card.classList.add("card");

            cardBack.classList.add("card-back");

            card.appendChild(cardBack);
            card.appendChild(cardFront);

            console.log(card);

            document.querySelector(".wrapper").appendChild(card);

            document.querySelectorAll(".card")[i].addEventListener("click", function() {
                console.log(this)
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
