function fibsRec(n, sequence = [], index = 0) {
	if (n <= 0) {
		return "Please enter an integer greater than zero.";
	}

	// Guard
	if (index === n - 1) {
		return sequence;
	}

	if (index === 0) {
		sequence.push(0);
	} else if (index === 1) {
		sequence.push(1);
	} else {
		sequence.push(sequence[index - 1] + sequence[index - 2]);
	}

	return fibsRec(n, sequence, index + 1);
}

console.log("fibsRec(0): ", fibsRec(0));
console.log("fibsRec(1): ", fibsRec(1));
console.log("fibsRec(2): ", fibsRec(2));
console.log("fibsRec(10): ", fibsRec(10));
