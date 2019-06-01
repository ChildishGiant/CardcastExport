/* global mdc */

const deckCode = document.getElementById("deckCode");

document.getElementById("fetch").onclick = function () {
	const value = deckCode.value;
	if (!value || value.length !== 5) {
		console.error(`Invalid code: ${value}`);
		return;
	}

	document.location = `code.html?code=${value}`;
};

mdc.textfield.MDCTextField.attachTo(document.querySelector(".mdc-text-field"));
mdc.ripple.MDCRipple.attachTo(document.querySelector(".mdc-button"));
