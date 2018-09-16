import cardRefs from "../data/card-refs.js";

import initMenu from "../menu/InitMenu.js";

function Game() {
	this.state = {
		hasStarted: false
	};

	// Sets the state for the game and calls the render function, starting
	// the game.
	this.initialize = function() {
		this.state = {
			timer: 60,
			numberOfPairs: 4,
			correctMatches: 0,
			cardFronts: cardRefs,
			cardFlipped: [],
			cardsObjects: [],
			hasStarted: true,
			canSelectCard: true
		};
		
		this.render();
	};

	// Picks and creates the card elements.
	this.createCards = function() {
		const cards = [];
		const fronts = this.state.cardFronts;
		const pairs = this.state.numberOfPairs;
		const cardsPicked = pickCardsToUse();

		// picks the cards to be used in play and fills the cards array.
		function pickCardsToUse() {
			// Used to store the cards already selected to avoid duplicates.
			const cardsPicked = [];

			// Loop that picks cards from the pool of cards until there are
			// enough unique cards for the number of pairs of cards needed.
			while (cardsPicked.length < pairs) {
				// If there aren't enough cards pick yet...
				
				// Pick a number randomly from the array of possible cards.
				const randomNumber = Math.floor(Math.random() * fronts.length);

				// Check if the number (card) has already been picked.
				if (!cardsPicked.includes(randomNumber)) {
					// If the number has not been picked yet...

					// Add the number to the cardsPicked array.
					cardsPicked.push(randomNumber);
				}
			}

			// Return the image location of each card picked using the 
			// numbers selected as the index locations of the card pool.
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
	};

	this.render = function() {
		const cards = this.createCards();

		const menuWrapper = document.querySelector(".menu-wrapper");

		menuWrapper.parentElement.removeChild(menuWrapper);

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
			card.dataset.index = i;

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
	};

	// Checks and handles if the cards selected match and if all the pairs of cards have been matched.
	this.checkGameState = function(event) {
		// check if user clicked on the card element or card front/back and set the variable to
		// point to the card element.
		const thisElement = event.target.classList.contains("card")
			? event.target
			: event.target.parentElement;

		// Check if the card can be clicked on, if not, then stop execution.
		if (
			thisElement.classList.contains("card-flipped") ||
			!this.state.canSelectCard
		)
			return;

		// remove the ability to click on a card, wait for the animations to finish
		this.disableCardSelect(1000);

		// add the card-flipped class
		thisElement.classList.add("card-flipped");

		// Check if a card is already flipped and waiting to be matched.
		if (this.state.cardFlipped.length === 0) {
			// If there is no card waiting to be matched, this card is now waiting to be matched.
			this.state.cardFlipped.push(thisElement);

			// If there is a card waiting to be matched...
		} else {
			// Ckeck if the card waiting to be matched and the card selected have the same name, and
			// are not the same exact card.
			if (
				thisElement.dataset.name ===
					this.state.cardFlipped[0].dataset.name &&
				thisElement.dataset.index !==
					this.state.cardFlipped[0].dataset.index
			) {
				// if there is a match
				console.log("Correct!");

				// Increase number of correct matches. Used to check if all pairs have been matched.
				this.state.correctMatches++;

				// Hide both of the matched cards
				thisElement.style.visibility = "hidden";
				this.state.cardFlipped[0].style.visibility = "hidden";

				// Reset the card waiting to be matched.
				this.state.cardFlipped = [];
			} else {
				// if there is NOT a match
				console.log("Wrong!");

				// create a timeout to allow the player to see the cards flip before further actions.
				setTimeout(() => {
					// Remove the card-flipped class of both of the matched cards.
					thisElement.classList.toggle("card-flipped");
					this.state.cardFlipped[0].classList.toggle("card-flipped");

					// Reset the card waiting to be matched.
					this.state.cardFlipped = [];
				}, 1000);
			}
		}

		// Check if the number of matched pairs equals the total number of pairs to determine if
		// all the pairs have been matched.
		if (this.state.correctMatches === this.state.numberOfPairs) {
			// If all pairs have been matched...
			console.log("Congrats, you won!");

			// Remove the entire game board.
			const cardWrapper = document.querySelector(".card-wrapper");
			cardWrapper.parentElement.removeChild(cardWrapper);

			// Return to the menu screen.
			initMenu();
		}
	};

	this.disableCardSelect = function(time = 1500) {
		this.state.canSelectCard = false;
		setTimeout(() => {
			this.state.canSelectCard = true;
		}, time);
	};
}

export default Game;
