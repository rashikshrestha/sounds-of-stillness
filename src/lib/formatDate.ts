// Frontmatter dates (e.g. `2025-03-21`) parse as UTC midnight. Formatting
// with local-time methods like toDateString() can then show the previous
// day in timezones behind UTC, so shift by the local offset before reading
// the calendar fields back out.
export function formatDate(date: Date): string {
  const shifted = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return shifted.toDateString();
}
