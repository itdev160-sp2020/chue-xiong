// grabs greeding id and sets it to a variable to have it's text changed.
var greetingElement = document.getElementById("greeting");
var greetingMessage = "Hi, Welcome to the MATC website!";

greetingElement.textContent = greetingMessage;

// grabs credits id and sets it to a variable to have it's text changed.
var creditsElement = document.getElementById("credits");
var creditsText = "3 Credits";

creditsElement.textContent = creditsText;

// grabs tuitionCost id and sets it to a variable to have it's text changed.
var tuitionCostElement = document.getElementById("tuitionCost");
var tuitionCostText = 462.90;

tuitionCostElement.textContent = tuitionCostText;

// grabs booksCost id and sets it to a variable to have it's text changed.
var booksCostElement = document.getElementById("booksCost");
var booksCostText = 150.00;

booksCostElement.textContent = booksCostText;

// calculates the total and displays it
var totalCostElement = document.getElementById("totalCost");
var totalCost = tuitionCostText + booksCostText;

totalCostElement.textContent = totalCost;