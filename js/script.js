
function sayHi() {
  alert("Hello, stranger!");
}


function shoutyHello() {
	var name = prompt("What is your name?");
	name = name.toUpperCase();
  alert("HELLO, " + name + "!!");
}


function evenOrOdd() {
	var number = prompt("What is your number?");
	if (number % 2 === 0) {
		alert("Your number is even");
	} else if (number % 2 === 1) {
		alert("Your number is odd");
	} else
	  alert("That's not even a number...");
}


function numberPrompter() {
	var number = prompt("Can you give me an even number greater than 3 and less than 11?");
	number = parseInt(number);
	if (number % 2 === 0 && number > 3 && number < 11) {
		alert("Congratulations");
	} else if (number % 2 !== 0 || number < 3 || number > 11) {
	  number = prompt("Please give me an even number greater than 3 and less than 11.");
	  numberPrompter();
	  }
}


function bottlesOfBeverage() {
	var number = prompt("Give me a positive number...");
	number = parseInt(number);	
	if (number < 1) {
			alert("Give me a POSITIVE number...");
			bottlesOfBeverage();
	} else {
			while (number > 0) {
				console.log(number + " bottles of beer on the wall! " + number + " bottles of beer! Take one down pass it around. " + (number - 1) + " bottles of beer on the wall!")
				number--;
				}
		}			
}

function fizzBuzz() {
	var number = prompt("Give me a positive number...");
	number = parseInt(number);	
	if (number > 0) {
		for (i = 1; i < number; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				console.log("FizzBuzz");
			} else if (i % 3 === 0) {
					console.log("Fizz");
			} else if (i % 5 === 0) {
					console.log("Buzz");
			} else {
				console.log(i);
			}
		}
	} else {
		var number = prompt("Give me a POSITIVE number...");
		fizzBuzz();
	}
}


function wordReverser() {
	var word = prompt("Give me a word!");
	var reversed = word.split('').reverse().join('');
	alert(reversed);
}


function driversLicense() {
	var age = prompt("What is your age?");
	age = parseInt(age);	
	if (age < 15) {
		alert("You're not eligible for a license yet.");
	}	else if (age === 15) {
		alert("You can get a learner's permit");
	} else if (age === 16 || age === 17) {
		alert("You can get a license, but you can't vote yet.");
	} else if (age >= 18 && age < 21) {
		alert("You can get a license, but you can't drink yet.")
	} else if (age >= 21 && age <= 24) {
		alert("You can drink, but you can't rent cars yet.")
	} else if (age > 24) {
		alert("You have full adult privileges.")
	} else {
		alert("Please enter an age in number form.")
		driversLicense();
	}
}

function wordSorterAlpha() {
	var words = []
	var timesToRepeat = 5
	for (i = 0; i < timesToRepeat; i++)
		words.push(prompt("I need a word please..."));
	words = words.sort().join(", ");
	alert(words);

}

