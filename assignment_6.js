/*
ASSIGNMENT 6:

Given the below array, create a function which loops through each name,
comparing the length of each to determine the longest name,
save that name to the variable longest_name.
Return longest_name to the another variable called answer and
log the answer variable to the screen.
*/

var array = [ Retta, Vern, Marica, Cyrus,  Linette, Curt, Nichole, Jesica, Wynell, Michaele ];

/*
This solution should be saved in your pre-work directory you created earlier as the
file: Assignment_6.js
*/

var numbers = [ "Retta", "Vern", "Marica", "Cyrus",  "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele" ];

let odd = [];
let even = [];

function splitOddAndEven(numbers) {
  for (let i = 0; i < numbers.length; i++) {
	if (numbers[i.length] % 2 === 0) {
	  even.push(numbers[i]);
	} else {
	  odd.push(numbers[i]);
	}
  }

  return even;
}
console.log(even);


// got stuck here. as this is an assessment, i presume searching online for answers isn't recommended.