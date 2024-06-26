// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Devesitory",
  tagline: "Developer Repository",
  favicon: "img/favicon.ico",

  url: "https://devesitory.phwt.me",
  baseUrl: "/",
  trailingSlash: false,

  organizationName: "devesitory",
  projectName: "devesitory",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "th",
    locales: ["th"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: "Devesitory",
          blogDescription: "Developer Repository",
          blogSidebarTitle: "Devesitory",
          showReadingTime: false,
          editUrl: "https://github.com/devesitory/devesitory/tree/main",
          blogSidebarCount: "ALL",
          postsPerPage: 5,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.jpg",
      navbar: {
        logo: {
          alt: "Devesitory Logo",
          src: "img/logo.svg",
        },
        items: [],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "Facebook",
            href: "https://facebook.com/devesitory",
          },
          {
            label: "GitHub",
            href: "https://github.com/devesitory",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Devesitory - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      { redirects: [{ from: "/", to: "/blog" }] }, // TODO: Create homepage
    ],
    "@docusaurus/plugin-ideal-image",
  ],
};

module.exports = config;
