const search = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2 + left);
    if (array[mid] === target) return mid;

    // determine the sorted part
    if (array[left] <= array[mid]) {
      // sorted left
      if (target >= array[left] && target < array[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // sorted right
      if (target > array[mid] && target <= array[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

module.exports = search;
