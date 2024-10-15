import { Range, isConcurrencyAboveThreshold } from './countEvents';

describe('areTooManyEventsOccurring', () => {
  test('should return true when there are too many concurrent events', () => {
    const events: Range[] = [
      { start: 1, end: 10 }, // 1
      { start: 2, end: 8 }, // 2
      { start: 3, end: 7 }, // 3
      { start: 4, end: 8 }, // 4
      { start: 5, end: 9 }, // 5
      { start: 6, end: 10 }, // 6
    ];
    const within = { start: 0, end: 10 };
    const maxEventsCount = 5;

    expect(isConcurrencyAboveThreshold(events, within, maxEventsCount)).toBe(true);
  });

  test('should return false when there are not too many concurrent events', () => {
    const events: Range[] = [
      { start: 1, end: 5 }, // 1
      { start: 2, end: 6 }, // 2
      { start: 3, end: 7 }, // 3
      { start: 4, end: 8 }, // 4
      { start: 5, end: 9 }, // 4
      { start: 6, end: 10 }, // 4
    ];
    const within = { start: 0, end: 10 };
    const maxEventsCount = 5;

    expect(isConcurrencyAboveThreshold(events, within, maxEventsCount)).toBe(false);
  });

  test('should return false when the number of concurrent events = threshold', () => {
    const events: Range[] = [
      { start: 1, end: 5 }, // 1
      { start: 2, end: 6 }, // 2
      { start: 3, end: 7 }, // 3
      { start: 4, end: 8 }, // 4
      { start: 4, end: 10 }, // 5
      { start: 5, end: 9 }, // 5
      { start: 6, end: 10 }, // 5
    ];
    const within = { start: 0, end: 10 };
    const maxEventsCount = 5;

    expect(isConcurrencyAboveThreshold(events, within, maxEventsCount)).toBe(false);
  });

  test('should return false for an empty timeline', () => {
    const events: Range[] = [];
    const within = { start: 0, end: 10 };
    const maxEventsCount = 5;

    expect(isConcurrencyAboveThreshold(events, within, maxEventsCount)).toBe(false);
  });
});
