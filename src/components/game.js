import React from 'react';

import NavBar from './nav-bar';
import GuessSection from './guesses.js';
import StatusSection from './status-section';
import InfoSection from './game-info';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			guesses: [],
			feedback: 'Make your guess',
			correctAnswer: Math.round(Math.random() * 100) + 1
		};
	}
	
	restartGame() {
		this.setState({
			guesses: [],
			feedback: 'Make your guess!',
			correctAnswer: Math.floor(Math.random() * 100) + 1
		});
	}

	makeGuess(guess) {
		guess = parseInt(guess, 10);
		if (isNaN(guess)) {
			this.setState({feedback: 'Please enter a valid number'});
			return;
		}

		const difference = Math.abs(guess - this.state.correctAnswer);

		let feedback;
		if (difference >= 50) {
			feedback = "You are ice cold"
		} else if (difference >=30) {
			feedback = "You are cold"
		} else if (difference >=20) {
			feedback = "Starting to get warm..."
		} else if (difference >=10) {
			feedback = "You are warm!"
		} else if (difference >=5) {
			feedback = "You are hot!"
		} else if (difference >=1) {
			feedback = "You are burning hot!"
		} else {
			feedback = "You got it!"
		}

		this.setState({
			feedback,
			guesses: [...this.state.guesses, guess]
		});

		document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
	}

	render () {
		const { feedback, guesses } = this.state;
		const guessCount = guesses.length;

		return (
			<div>
				<NavBar onRestartGame={() => this.restartGame()}/>
				<main role="main">
					<GuessSection 
						feedback={feedback}
						guessCount={guessCount}
						onMakeGuess={guess => this.makeGuess(guess)}
					/>
					<StatusSection guesses={guesses} />
					<InfoSection />
				</main>
			</div>
		);
	}
}



