// document.querySelector('.card').addEventListener('click', ()=>{
//     this.classList.toggle('card-flipped');
// })

/* 
    Start Screen
*/

// Set up the start screen functionality
function initStartScreen() {
    // variables for the menu options.
    const container = document.querySelector(".container");
    const wrapper = document.createElement("div");
    wrapper.classList.add("menu-wrapper");
    container.appendChild(wrapper);

    mainBtn();

    function mainBtn() {
        const mainMenuButtons = [
            {
                text: "Story",
                function: StoryBtn
            },
            {
                text: "Arcade",
                function: ArcadeBtn
            },
            {
                text: "Options",
                function: OptionsBtn
            },
            {
                text: "Credits",
                function: CreditsBtn
            }
        ];

        createButtons(mainMenuButtons);
    }

    function createButtons(buttons) {
        // remove any previous buttons
        wrapper.querySelectorAll("div").forEach(v => wrapper.removeChild(v));
        
        // create the buttons for the menu options
        buttons.forEach(v => {
            const btn = document.createElement("div");
            btn.innerText = v.text;
            btn.classList.add("menu-btn");

            btn.addEventListener("click", v.function);

            wrapper.appendChild(btn);
        });
    }

    // Button functions
    function StoryBtn() {
        console.log("story btn clicked", this);

        const storyMenuButtons = [
            {
                text: "Chapter 1",
                function: chapter1Btn
            },
            {
                text: "Chapter 2",
                function: chapter2Btn
            },
            {
                text: "Chapter 3",
                function: chapter3Btn
            },
            {
                text: "Main Menu",
                function: mainBtn
            }
        ];

        createButtons(storyMenuButtons);

        function chapter1Btn() {
            console.log("chapter 1 btn clicked", this);
        }

        function chapter2Btn() {
            console.log("chapter 2 btn clicked", this);
        }

        function chapter3Btn() {
            console.log("chapter 3 btn clicked", this);
        }
    }

    function ArcadeBtn() {
        console.log("arcade btn clicked", this);
    }

    function OptionsBtn() {
        console.log("options btn clicked", this);
    }

    function CreditsBtn() {
        console.log("creadits btn clicked", this);
    }
}

initStartScreen();

// document.querySelector("button").addEventListener("click", () => {
//     if (!Game.state.hasStarted) {
//         Game.initialize();
//     }
// });

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
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-01-00.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-01-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-01-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-01-06.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-03-00.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-03-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-03-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-03-06.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-05-00.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-05-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-05-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-07-00.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-07-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-07-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-09-00.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-09-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-09-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-11-00.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-11-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-11-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-13-00.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-13-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-0-2-13-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-08.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-10.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-12.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-14.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-16g.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-00-18.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-06.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-08.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-10.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-12.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-14.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-16.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-02-18.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-06.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-08.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-10.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-12.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-14.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-16.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-04-18.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-06.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-08.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-10.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-12.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-14.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-16.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-06-18.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-00.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-06.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-08.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-10.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-12.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-14.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-16.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-08-18.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-00.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-06.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-08.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-10.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-12.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-14.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-16.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-10-18.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-00.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-02.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-04.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-06.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-08.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-10.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-12.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-14.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-16.png",
                "DS DSi - Phoenix Wright Ace Attorney - Evidence-1-1-12-18.png",
                "evidence-Attorneys-Badge.png"
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
