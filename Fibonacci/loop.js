function fibs(n) {
	if (n <= 0) {
		return "Please enter an integer above zero.";
	}

	let sequence = [0, 1];

	for (let i = 2; i < n; i++) {
		sequence.push(sequence[i - 1] + sequence[i - 2]);
	}

	return n === 1 ? [0] : sequence;
}

console.log("fibs(0): ", fibs(0));
console.log("fibs(1): ", fibs(1));
console.log("fibs(2): ", fibs(2));
console.log("fibs(10): ", fibs(10));
