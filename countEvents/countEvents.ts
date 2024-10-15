export interface Range {
  start: number;
  end: number;
}

interface Point {
  timestamp: number;
  type: 'start' | 'end';
}

export const isConcurrencyAboveThreshold = <E extends Range>(spanEvents: E[], within: Range, threshold: number): boolean => {
  const relevantEvents = spanEvents.filter(event => event.start <= within.end && event.end >= within.start);

  const timeline: Point[] = [];

  for (const event of relevantEvents) {
    timeline.push({ timestamp: event.start, type: 'start' });
    timeline.push({ timestamp: event.end, type: 'end' });
  }

  timeline.sort((a, b) => a.timestamp - b.timestamp);

  let concurrency = 0;

  for (const point of timeline) {
    if (point.type === 'start') {
      concurrency++;
    } else {
      concurrency--;
    }

    if (concurrency > threshold) {
      return true;
    }
  }

  return false;
};
