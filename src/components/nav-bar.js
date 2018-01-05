import React from 'react';

export default function NavBar(props) {
	const links = props.links.map((link, index) => (
		<li key={index}>
			<a href={link.href}>
				{link.text}
			</a>
		</li>
	));

	return (
		<div className="navigation-bar">
			<h1>{props.title}</h1>
			<nav>
				<ul>
					{links}
				</ul>
			</nav>
		</div>
	);
}