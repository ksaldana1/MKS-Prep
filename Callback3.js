
var arr1 = [1, 2, 3]
// Callback Functions
function add1(value) {
	return value += 1;
};
function times2(value) {
	return value *= 2;
};

// Invoke with Host Functions
arr1.map(add1); // returns [2, 3, 4]
arr1.map(times2) // returns [2, 4, 6]

