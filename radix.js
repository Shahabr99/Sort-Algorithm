// Get the digit at a specific position for a number
function getDigit(num, position) {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

// Count the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Find the number of digits in the largest number in an array
function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

// Radix Sort implementation
function radixSort(arr) {
  const maxDigits = mostDigits(arr);

  for (let k = 0; k < maxDigits; k++) {
    // Create buckets for each digit (0-9)
    let buckets = Array.from({ length: 10 }, () => []);

    // Place each number in the appropriate bucket
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    // Concatenate the buckets into a new array
    arr = [].concat(...buckets);
  }

  return arr;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };