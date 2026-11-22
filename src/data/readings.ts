// The public reading schedule (Constitution, Art. VIII §3).
//
// Empty until the first schedule is approved. While it's empty, the Readings page
// says the schedule will be posted there and the home page says "To be announced".
//
// To add a session, add an entry like this (dates are YYYY-MM-DD, a Sunday):
//
//   {
//     date: '2027-02-07',
//     semester: 'Spring 2027',
//     title: 'Federalist No. 10',
//     author: 'James Madison',
//     year: '1787',
//     field: 'Politics',
//     leader: 'Jane Doe',                       // optional
//     link: 'https://example.com/reading.pdf',  // optional
//   },
//
// The site works out on its own which sessions are upcoming and which are past.

export type Field =
  | 'Philosophy'
  | 'Politics'
  | 'Economics'
  | 'Technology & AI'
  | 'History'
  | 'Current Events';

export interface Session {
  date: string;
  semester: string; // e.g. "Fall 2026"; used to group the archive
  title: string;
  author: string;
  year?: string; // year the text was written
  field: Field;
  leader?: string; // Discussion Leader; leave blank if not yet appointed
  question?: string; // one opening discussion question
  link?: string; // where members can get the reading
}

export const sessions: Session[] = [];
