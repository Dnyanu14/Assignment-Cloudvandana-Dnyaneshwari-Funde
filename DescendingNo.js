function compareNumbersDescending(a, b) {
    // Compare function for sorting in descending order
    return b - a;
}

function sortArrayDescending(arr) {
    // Use the compare function to sort the array in descending order
    return arr.sort(compareNumbersDescending);
}

// Example usage
const numbers = [5, 2, 9, 1, 5, 6];
const sortedArray = sortArrayDescending(numbers);
console.log(sortedArray);
// Output: [9, 6, 5, 5, 2, 1]
