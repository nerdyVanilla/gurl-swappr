const canTrade = function (thePlayer, trader) {
	let attributes = Object.keys(trader.want);

	let tradeMatch = attributes.reduce((acc, attribute) => {
		if (Array.isArray(thePlayer[attribute])) {
			if (thePlayer[attribute].length > 0) {
				if (trader.want[attribute] == true) {
					acc = acc && true;
				} else if (trader.want[attribute] !== false) {
					acc =
						acc &&
						trader.want[attribute].reduce((acc2, trait) => {
							return acc && thePlayer[attribute].includes(trait);
						}, true);
				} else {
					// Make sure the thePlayer can trade a trait that is not what the trader has.
					acc =
						acc &&
						trader.want[attribute].reduce((acc, trait) => {
							return acc && thePlayer[attribute].filter((value) => value !== trait).length > 0;
						}, true);
				}
			} else {
				acc = acc && false;
			}
		} else if (trader.want[attribute] == true) {
			acc = acc && true;
		} else if (trader.want[attribute] == false) {
			// Handle the "Any Other"
			if (trader.to_trade[attribute] !== thePlayer[attribute]) {
				acc = acc && true;
			} else {
				acc = acc && false;
			}
		} else {
			//
			if (trader.want[attribute] == thePlayer[attribute]) {
				acc = acc && true;
			} else {
				acc = acc && false;
			}
		}

		return acc;
	}, true);
	return tradeMatch;
};

function tradeAttributes(thePlayer, trader) {
	// Need to remove the requested trait from the player.
	let attributes = Object.keys(trader.want);
	attributes.forEach((attribute) => {
		// console.log(attribute);
		if (Array.isArray(thePlayer[attribute])) {
			if (Array.isArray(trader.want[attribute])) {
				trader.want[attribute].forEach((subAttribute) => {
					thePlayer[attribute] = thePlayer[attribute].filter((value) => {
						// console.log(value, subAttribute);
						return value !== subAttribute;
					});
					// console.log(player[attribute]);
				});
			} else if (trader.want[attribute] == true) {
				thePlayer[attribute].shift();
			} else if (trader.want[attribute] == false) {
				// Don't think we really handle this.
				// filter player attribute of trader attribute
				// remove a player attribute
				// add the trader attribute to the player attribute
				// Make this happen.
			} else {
				// console.log(player[attribute]);
				// console.log(trader.want[attribute]);
				thePlayer[attribute] = thePlayer[attribute].filter((value) => {
					// console.log(value, trader.want[attribute]);
					return value !== trader.want[attribute];
				});
				// console.log(player[attribute]);
			}
		}
	});

	// Put the trader's attributes on the player.
	attributes = Object.keys(trader.to_trade);
	attributes.forEach((attribute) => {
		if (Array.isArray(thePlayer[attribute])) {
			thePlayer[attribute] = thePlayer[attribute].concat(trader.to_trade[attribute]);
		} else {
			thePlayer[attribute] = trader.to_trade[attribute];
		}
	});
	// console.log(trader.want);
	// console.log(trader.to_trade);
	return thePlayer;
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

export { canTrade, tradeAttributes, shuffleArray };
