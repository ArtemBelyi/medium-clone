
// Generate numbers range with specified step.
export function getRange(start: number, stop: number, step: number): Array<number> {
  return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
}
