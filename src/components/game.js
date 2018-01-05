import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav-bar';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		// state in here this.state = {}
	}
	

	render () {
		const links = [{
			text: 'What?',
			href: '#'
		}, {
			text: '+New Game',
			href: '#'
		}];
		return (<NavBar title="Hot or Cold" links={links} />)
	}
}



