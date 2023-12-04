function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentEl = arr[i]
    let j = i - 1;
    
    while(j >= 0 && arr[j] > currentEl) {
      arr[j + 1] = arr[j]
      console.log(j)
      console.log(i)
      j--
    }

    arr[j + 1] = currentEl;
  }

  return arr;
}

module.exports = insertionSort;