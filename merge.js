function merge(arr1, arr2) {
  
}

function mergeSort(arr) {
  // base case
  if(arr.length <= 1) return arr

  // finding midpoint
  const mid = Math.floor(arr.length / 2)

  // creating two arrays
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(left, right)
}

module.exports = { merge, mergeSort};