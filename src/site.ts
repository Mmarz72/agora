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
  // Until then, the petition form's mailing-list checkbox collects sign-ups.
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

  // The recognition petition (SGRC needs at least 25 undergraduate signatures).
  // While `active` is true, the home page button and the nav point to /petition.
  // Set `active` to false once Agora is recognized.
  petition: {
    active: true,
    goal: 25,
    // Show the form inside the petition page. Keep false while the form is restricted to
    // Princeton accounts: Google's sign-in can't run inside an embedded frame, so the
    // buttons open the form directly instead.
    embed: false,
    // The Google Form people sign. Set to null to hide the form.
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdEfR63jrVfEbhXzOg01wFwXvLS4FbrcEshNMy_utDFv7deMg/viewform' as string | null,
  },
};

export const nav = [
  { href: url('/about'), label: 'About' },
  { href: url('/readings'), label: 'Readings' },
  { href: url('/people'), label: 'People' },
  { href: url('/join'), label: 'Join' },
  ...(site.petition.active ? [{ href: url('/petition'), label: 'Petition' }] : []),
];
