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

    it('sorts when left side is semi-sorted', () => {
      expect(sort([7, 10, 8, 6, 9, 11, 255, 100]))
        .toEqual([6, 7, 8, 9, 10, 11, 100, 255]);
    });

    it('sorts an array with duplicate elements', () => {
      expect(sort([10, 8, 100, 100, 7, 3, 255, 7]))
        .toEqual([3, 7, 7, 8, 10, 100, 100, 255]);
    });

    it('sorts a bigger array', () => {
      expect(sort([7, 10, 8, 6, 9, 11, 255, 100, 21, 4, 0, 10, 8, 100, 123, 100, 7, 3, 255, 7, 10, 1, 8, 100, 100, 7, 3, 254, 7, 87]))
        .toEqual([0, 1, 3, 3, 4, 6, 7, 7, 7, 7, 7, 8, 8, 8, 9, 10, 10, 10, 11, 21, 87, 100, 100, 100, 100, 100, 123, 254, 255, 255]);
    });
  });

}
