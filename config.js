// Survey Lab Central, online. Built with:  npm run build:central   Published with:  npm run publish:central
//
// supabaseUrl / publishableKey: the central site's OWN Supabase project
// ("Survey Overwatch", in its own Supabase account) and its PUBLIC key — safe
// to publish: every table is for operators only (supabase/central/central.sql).
// Never a secret key here.
// demo: the public demo, whose status the Overview shows.
window.__CENTRAL_CONFIG__ = {
  supabaseUrl: "https://vlfcvjmlojqjudupiaht.supabase.co",
  publishableKey: "sb_publishable_1bbHzV5i8KPHm9_RKpA8rQ_eDoW-YRQ",
  demo: {
    site: "https://chargerlouk.github.io/survey-lab-demo/",
    supabaseUrl: "https://czkxmekxbavnfwrmsivn.supabase.co",
    publicKey: "sb_publishable_A_ZXSmQ6xt_vUJKr2rn3Qw_1ohxTfw-",
  },
  // Shown on the Settings page under "Your services". Addresses only — no keys.
  links: [
    { label: "Source code (private, GitHub)", url: "https://github.com/Chargerlouk/survey-lab" },
    { label: "The demo's published files (GitHub)", url: "https://github.com/Chargerlouk/survey-lab-demo" },
    { label: "This site's published files (GitHub)", url: "https://github.com/Chargerlouk/survey-lab-central" },
    { label: "Email sending (Brevo)", url: "https://app.brevo.com/" },
    { label: "All Supabase projects", url: "https://supabase.com/dashboard/projects" },
  ],
};
