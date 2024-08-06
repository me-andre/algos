import mergeSort from './mergeSort';

describe('mergeSort', () => {
  it('returns an empty array when given an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  it('sorts an array of even length', () => {
    expect(mergeSort([10, 8, 100, 1, 7, 3]))
      .toEqual([1, 3, 7, 8, 10, 100]);
  });

  it('sorts an array of uneven length', () => {
    expect(mergeSort([10, 8, 100, 1, 7, 3, 255]))
      .toEqual([1, 3, 7, 8, 10, 100, 255]);
  });

  it('sorts an array with duplicate elements', () => {
    expect(mergeSort([10, 8, 100, 100, 7, 3, 255, 7]))
      .toEqual([3, 7, 7, 8, 10, 100, 100, 255]);
  });
});
