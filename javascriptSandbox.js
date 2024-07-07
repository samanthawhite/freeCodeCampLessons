/* 
	INFO ABOUT ARRAYS
*/
let rows = ["Chloe","Sam","Sophia","Marcus"]; // define an array
console.log(rows); // display the array
console.log(rows[1]); // arrays are 0 index based -- use 1 to get the second element in an array
rows[3] = "Betty"; // arrays can be easily changed (aka. mutated)
console.log(rows); // display the new array
// .length property
console.log(rows.length); // shows the number of elements in array
console.log(rows[rows.length-1]); // displays the last element of an array

/*
	Constants
*/
const firstName = "Sam"; // using const instead of let prevents the variable from changing later
const year = 2024;
console.log(firstName);
console.log(year);

/*
	FOR Loop
*/
rows = [];
const count = 8;
for (let i = 0; i < count; i = i + 1) {
	rows.push(i);
}

let result = ""; // to view the results

// create a FOR...OF loop
for (const row of rows) {
	result = result + "\n" + row; // view the results with a line break (\n)
}


