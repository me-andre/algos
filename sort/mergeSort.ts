const mergeSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);

  const left = array.slice(0, middle);
  const right = array.slice(middle);

  mergeSort(left);
  mergeSort(right);

  for (let leftI = 0, rightI = 0, i = 0; i < array.length; i++) {
    if (leftI === left.length) {
      array[i] = right[rightI];
      rightI++;
      continue;
    }
    if (rightI === right.length) {
      array[i] = left[leftI];
      leftI++;
      continue;
    }
    if (left[leftI] <= right[rightI]) {
      array[i] = left[leftI];
      leftI++;
    } else {
      array[i] = right[rightI];
      rightI++;
    }
  }

  return array;
};

export default mergeSort;
