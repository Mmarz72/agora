import { sessions, type Session } from './readings';

const toDate = (s: string) => new Date(`${s}T12:00:00`);

// "Today" is the day the site was built. The site is rebuilt on every change,
// and should also be rebuilt weekly so "This week" stays current.
const today = new Date();
today.setHours(0, 0, 0, 0);

const sorted = [...sessions].sort((a, b) => a.date.localeCompare(b.date));

export const upcoming: Session[] = sorted.filter((s) => toDate(s.date) >= today);
export const past: Session[] = sorted.filter((s) => toDate(s.date) < today).reverse();
export const thisWeek: Session | undefined = upcoming[0];

export function formatDate(s: string, opts: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' }) {
  return toDate(s).toLocaleDateString('en-US', opts);
}

/** Past sessions grouped by semester, newest semester first. */
export function archiveBySemester() {
  const groups = new Map<string, Session[]>();
  for (const s of past) {
    if (!groups.has(s.semester)) groups.set(s.semester, []);
    groups.get(s.semester)!.push(s);
  }
  return [...groups.entries()];
}
