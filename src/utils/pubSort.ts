/**
 * Within-year sort key for publications (higher = more recent). Uses the
 * online-first `date` from pubman when available, since `month` is often a
 * future print-issue month; falls back to `month`.
 */
export function pubSortKey(data: { year: number; month?: number; date?: Date }): number {
  if (data.date) {
    const y = data.date.getUTCFullYear();
    if (y < data.year) return 0;
    if (y > data.year) return 1300;
    return (data.date.getUTCMonth() + 1) * 100 + data.date.getUTCDate();
  }
  return (data.month ?? 0) * 100;
}
