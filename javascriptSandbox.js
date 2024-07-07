/* 
	INFO ABOUT ARRAYS
*/
let rows = ["Chloe","Sam","Sophia","Marcus"]; // define an array
console.log(rows); // display the array
console.log(rows[1]); // arrays are 0 index based -- use 1 to get the second element in an array
rows[3] = "Betty"; // arrays can be easily changed (aka. mutated)
console.log(rows); // display the new array
// .length property
console.log(rows.length) // shows the number of elements in array
console.log(rows[rows.length-1]); // displays the last element of an array