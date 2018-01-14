import React from 'react';

export default function InfoSection(props) {
	return (
		<section id="what" tabIndex="-1">
			<h2>What do I do?</h2>
			<p>This is a hot or cold number guessing game.:</p>
			<ol>
				<li>I pick a number between 1 and 100.</li>
				<li>You guess until you find my number.</li>
				<li>You get feedback based on how close (hot) or far (cold) you are.</li>
			</ol>
		</section>
	);
}