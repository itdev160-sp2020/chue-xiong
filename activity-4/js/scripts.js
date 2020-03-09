// greeting message
var user = 'Chue';
var salutation = 'Hello, '
var greeting = salutation + user + ". Welcome to the product page for the new Samsung Galaxy S20, S20+ & S20 Ultra!";

var greetingElement = document.getElementById('greeting');

greetingElement.textContent = greeting;

// price and student discount
var priceElement = document.getElementById('price'),
    studentPriceElement = document.getElementById('student-price'),
    price = 1000,
    studentDiscount = .15,
    studentPrice = price - (price * studentDiscount);

priceElement.textContent = price.toFixed(2);
studentPriceElement.textContent = studentPrice.toFixed(2);