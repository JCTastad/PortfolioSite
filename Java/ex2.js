"use strict";


let hours; 
let payRate;
let standardWorkWeekHours = 40;
let totalPay;


hours = prompt("Please eneter how many hours you worked this week:");
payRate = prompt("Please enter your base pay rate:");

if(hours > standardWorkWeekHours) {
	let overtimePayMultiplier = 1.5;
	let overtimeHours = hours - standardWorkWeekHours;
	let overtimePayRate = overtimePayMultiplier * overtimePayRate;

	let totalPay = (standardWorkWeekHours * payRate) + (overtimeHours * overtimePayRate);
}
else {
	let totalPay = hours * payRate;
}

	console.log("You earned $" + totalPay + "this week!");




