import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
	return (
		<div className="cards-container">
			{props.cards.map((card, i) => (
				<Card key={i} card={card} />
			))}
		</div>
	);
};

PropTypes.Cards = {
	cards: PropTypes.func,
};

// Make sure you include prop types for all of your incoming props

export default Cards;
