const quickSort = (array: number[]) => quickSortInPlace(array.slice(), 0, array.length);

const quickSortInPlace = (array: number[], start: number, end: number): number[] => {
  if ((end - start) <= 1) {
    return array;
  }

  const initialPivotI = start + Math.floor((end - start) / 2);

  let pivotI = initialPivotI;

  // left side
  for (let i = 0; i < Math.floor((end - start) / 2); i++) {
    const index = initialPivotI - i - 1;
    if (array[index] > array[pivotI]) {
      const current = array[index];
      array[index] = array[pivotI - 1];
      array[pivotI - 1] = array[pivotI];
      array[pivotI] = current;
      pivotI--;
    }
  }

  // right side
  for (let i = 0; i < Math.floor((end - start) / 2); i++) {
    const index = initialPivotI + i + 1;
    if (array[index] < array[pivotI]) {
      const current = array[index];
      array[index] = array[pivotI + 1];
      array[pivotI + 1] = array[pivotI];
      array[pivotI] = current;
      pivotI++;
    }
  }

  quickSortInPlace(array, start, pivotI);
  quickSortInPlace(array, pivotI + 1, end);

  return array;
};

export default quickSort;
