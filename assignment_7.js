/*
ASSIGNMENT 7:

Indexing

Create a function that takes the below array of names, and separates them into two
arrays: one of the names with an even number of letters, and one with an odd number of
letters.
Then take the first letter of each of the names in the even array and make it the
letter "b".
Take the last letter in each of the names in the odd array and make them
a “c”.
Print both arrays, and then return the even one to a variable named even_array and
print it again.
*/

var names_array = ["bob","jimmy","max b", "bernie", "jordan", "future hendrix"];
evenArray = [];
oddArray = [];


function twoLists (names_array) {
	for (q=0; q<names_array.length; j++) {
		if (names_array[q] % 2 = 0) {
			names_array.push(q);
		
		}
	}
}


// got stuck here as well. as this is an assessment, i presume searching online for answers isn't recommended.