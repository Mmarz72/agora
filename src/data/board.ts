// The Executive Board (Constitution, Art. III §1).
// Fill in names as offices are filled. Leave `name` empty to show "To be announced".

export interface Officer {
  role: string;
  name: string;
  note?: string;
  duty: string; // short summary of the constitutional duties
}

export const board: Officer[] = [
  {
    role: 'Co-President',
    name: 'Holden Demain',
    note: 'Founding Co-President',
    duty: 'Chief officer; presides over the Board and oversees weekly sessions.',
  },
  {
    role: 'Co-President',
    name: 'Ammar Omar',
    note: 'Founding Co-President',
    duty: 'Chief officer; presides over the Board and oversees weekly sessions.',
  },
  {
    role: 'Vice President',
    name: '',
    duty: 'Outreach and recruitment; liaison to faculty, departments and guest speakers.',
  },
  {
    role: 'Director of Readings',
    name: '',
    duty: 'Builds the reading schedule and appoints each week’s Discussion Leader.',
  },
  {
    role: 'Treasurer',
    name: '',
    duty: 'Manages funds and budgets, and keeps the food on the table.',
  },
  {
    role: 'Secretary',
    name: '',
    duty: 'Keeps the mailing list, sends the readings and holds the official constitution.',
  },
];
