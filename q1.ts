const d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(array: number[], target: number) {
  let low = 0;

  let high = array.length - 1;

  while (low <= high) {
    let middle = low + (high - low) / 2;

    let value = array[middle];

    if (value < target) {
      low = middle + 1;
    } else if (value > target) {
      high = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(binarySearch(d, 7));
