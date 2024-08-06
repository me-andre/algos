import mergeSort from './mergeSort';
import quickSort from './quickSort';

interface SortingAlgo {
  name: string;
  impl: (array: number[]) => number[];
}

const sortingAlgos: SortingAlgo[] = [
  {
    name: 'mergeSort',
    impl: mergeSort,
  },
  {
    name: 'quickSort',
    impl: quickSort,
  }
];

for (const { name, impl: sort } of sortingAlgos) {
  describe(name, () => {
    it('returns an empty array when given an empty array', () => {
      expect(sort([])).toEqual([]);
    });

    it('sorts an array of even length', () => {
      expect(sort([10, 8, 100, 1, 7, 3]))
        .toEqual([1, 3, 7, 8, 10, 100]);
    });

    it('sorts an array of uneven length', () => {
      expect(sort([10, 8, 100, 1, 7, 3, 255]))
        .toEqual([1, 3, 7, 8, 10, 100, 255]);
    });

    it('sorts an array with duplicate elements', () => {
      expect(sort([10, 8, 100, 100, 7, 3, 255, 7]))
        .toEqual([3, 7, 7, 8, 10, 100, 100, 255]);
    });
  });

}
