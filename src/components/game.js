import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/nav-bar';

export default function Game(props) {
	const links = [{
		text: 'What?',
		href: '#'
	}, {
		text: '+New Game',
		href: '#'
	}];

ReactDOM.render(
	<NavBar title="Hot or Cold" links={links} />,
	document.getElementById('root')
);

}



