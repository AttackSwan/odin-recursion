// ----- Pseudocode -----
// On input of n elements
//     if n < 2
//         return
//     else
//         sort left half of elements
//         sort right half of elements
//         merge sorted halves

function mergeSort(array = []) {
	if (array.length === 0) {
		return "Please enter a non-empty array.";
	} else if (array.length === 1) {
		return array;
	}

	const middle = Math.floor(array.length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray, rightArray) {
	let merged = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
		if (leftArray[leftIndex] < rightArray[rightIndex]) {
			merged.push(leftArray[leftIndex]);
			leftIndex++;
		} else {
			merged.push(rightArray[rightIndex]);
			rightIndex++;
		}
	}

	return merged
		.concat(leftArray.slice(leftIndex))
		.concat(rightArray.slice(rightIndex));
}

console.log("mergeSort(): ", mergeSort());
console.log("mergeSort([]): ", mergeSort([]));
console.log("mergeSort([1]): ", mergeSort([1]));
console.log("mergeSort([2, 1, 3]): ", mergeSort([2, 1, 3]));
console.log(
	"mergeSort([6, 10, 1, 9, 4, 8, 2, 7, 3, 5]): ",
	mergeSort([6, 10, 1, 9, 4, 8, 2, 7, 3, 5])
);
