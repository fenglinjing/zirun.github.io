export default {
  logo: <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>🌱 Hugo Theme Dream</span>,
  project: {
    link: 'https://github.com/g1eny0ung/hugo-theme-dream',
  },
  docsRepositoryBase: 'https://github.com/g1eny0ung/hugo-theme-dream/tree/master/docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Hugo Theme Dream',
    }
  },
  color: {
    hue: 146,
    saturation: 50,
    lightness: 36,
  },
  head: (
    <>
      <meta name="description" content="Documentation for Hugo Theme Dream" />
    </>
  ),
  footer: {
    content: (
      <span>
        <a style={{ textDecoration: 'underline' }} href="https://github.com/g1eny0ung/hugo-theme-dream" target="_blank">
          🌱 Hugo Theme Dream
        </a>{' '}
        is released under the{' '}
        <a style={{ textDecoration: 'underline' }} href="https://choosealicense.com/licenses/mit/" target="_blank">
          MIT License
        </a>
        .
      </span>
    ),
  },
  banner: {
    key: 'zen-mode',
    content: (
      <a href="https://g1en.site/hugo-theme-dream/zen-mode">🍃 Hugo Theme Dream 3.5 introduces Zen mode. Read more →</a>
    ),
  },
}
