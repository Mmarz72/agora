// Site-wide settings. Edit these values; every page reads from here.
// Anything marked TODO is a placeholder that still needs a real value.

// Prefixes internal links with the site's base path (/agora on GitHub Pages).
// Always write internal links as url('/about'), never a bare '/about'.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => `${BASE}${path}`;

export const site = {
  name: 'Agora',
  tagline: 'A Weekly Reading and Discussion Society at Princeton University',

  // Shows a thin "draft preview" bar across the top of every page.
  // Set to false before launch.
  draft: false,

  // TODO: confirm founding year.
  founded: 2026,

  // TODO: real mailing-list sign-up link (e.g. a Princeton listserv or Google Form).
  // While it's null, buttons say "How to join" and go to the Join page instead.
  mailingListUrl: null as string | null,

  // TODO: club email. Leave as null to hide it.
  email: null as string | null,

  // TODO: real time and room.
  meeting: {
    day: 'Sundays',
    time: 'Afternoons',
    place: 'Location announced on the mailing list',
  },

  // Required by Constitution, Art. VIII §4.
  openToAll: 'Agora is open to all Princeton University students.',
};

export const nav = [
  { href: url('/about'), label: 'About' },
  { href: url('/readings'), label: 'Readings' },
  { href: url('/people'), label: 'People' },
  { href: url('/join'), label: 'Join' },
];
