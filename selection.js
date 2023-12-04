function selectionSort(arr) {

  for(let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part of the array
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    // Swap the found minimum element with the first element
    if(minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

module.exports = selectionSort;