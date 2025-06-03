// temp-converter-pages/pages/_app.js
// Custom App component for Next.js Pages Router.
// Used to initialize pages and import global styles.

import '../styles/globals.css'; // Global styles (including Tailwind).

// Wraps all pages.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}