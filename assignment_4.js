/*
Assignment 4:

Math and evaluation

Now create a loop that compares the array of numbers provided for the number 25,
console log over if it is over and under if it is under
over_under_array = [1,45,32,21,5,17,43,93]

This solution should be saved in your pre-work directory you created earlier as the
file: assignment_4.js


*/
var over_under_array = [1,45,32,21,5,17,43,93];

let theNumTwentyFive = 25;

for(var i=0; i<over_under_array.length; i++) {
	if (over_under_array[i] < theNumTwentyFive) {
		console.log(over_under_array[i] + " is less than " + theNumTwentyFive);
	} else{
		console.log(over_under_array[i] + " is larger than " + theNumTwentyFive);
	}
};