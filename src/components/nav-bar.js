import React from 'react';

export default function NavBar(props) {
	return (
		<nav>
			<ul>
				<li>
					<a 
						href="#what"
						className="what"
					>
					What?
					</a>
				</li>
				<li>
					<a
						href="#feedback"
						classname="new"
						onClick={() => props.onRestartGame()}
					>
						New Game
					</a>
				</li>
			</ul>
		</nav>
	);
}