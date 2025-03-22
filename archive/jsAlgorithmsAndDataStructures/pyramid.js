// Pyramid Project

// define variables
const character = "#";
const count = 8;
const rows = [];
let result = "";

// define functions
function padRow(rowNumber, rowCount) {
	return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

function displayPyramid(type,rows){
	// for...of loop
	// displays each part of the row array individually in the console
	for (const row of rows) {
		result = result + "\n" + row;
	};
	
	// display in console
	console.log(type);
	console.log(result);
};

// pyramid for loop
for (let i = 1; i <= count; i++) {
	rows.push(padRow(i, count));
}

displayPyramid("For Loop",rows);

////////////////////////////////
// WHILE Loop
/////////////////////////////// 
result = "";

while (rows.length < count) {
	rows.push(padRow(rows.length + 1, count));
}

displayPyramid("While Loop",rows);

////////////////////////////////
// Upside Down Pyramid
///////////////////////////////
result = "";

for (let i = count; i > 0; i -= 1) {
	rows.push(padRow(i,count));
}

displayPyramid("Upside Down",rows);

////////////////////////////////
// Upside Down Pyramid -- For Loop
///////////////////////////////
result = "";

for (let i = count; i > 0; i -= 1) {
	rows.unshift(padRow(i,count));
}

displayPyramid("Upside Down -- For Loop",rows);