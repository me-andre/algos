const quickSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const pivotI = Math.floor(array.length / 2);

  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotI) {
      continue;
    }
    if (array[i] <= array[pivotI]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return [...sortedLeft, array[pivotI], ...sortedRight];
};

export default quickSort;
