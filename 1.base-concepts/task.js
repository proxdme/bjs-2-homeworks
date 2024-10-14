"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const d = b ** 2 - 4 * a * c; 
	if (d < 0) {
		return arr;
	} else if (d === 0) {

		const x = -b / (2 * a);
		arr.push(x);
	} else {

		const x1 = (-b + Math.sqrt(d)) / (2 * a);
		const x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	}

	return arr;
}


"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	percent = parseFloat(percent);
	contribution = parseFloat(contribution);
	amount = parseFloat(amount);
	countMonths = parseInt(countMonths);


	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}
	const monthlyRate = percent / 100 / 12;

	const principal = amount - contribution;

	if (principal <= 0) {
		return 0;
	}

	const monthlyPayment = principal * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));

	const totalPayment = monthlyPayment * countMonths;

	return +totalPayment.toFixed(2);
}
