// @ts-check

const config = {
  title: 'zRan Online',
  tagline: 'Player documentation, support, and community guides',

  url: 'https://Ran-Online-Development.github.io',
  baseUrl: '/zRan-EP7-Docs/',

  organizationName: 'Ran-Online-Development',
  projectName: 'zRan-EP7-Docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'description',
        content: 'Public player documentation for zRan Online.',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'zRan Online',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/Ran-Online-Development/zRan-EP7-Docs/issues',
          label: 'Issues',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/start/getting-started',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/support/troubleshooting',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Report a Bug',
              to: '/docs/support/report-a-bug',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/Ran-Online-Development/zRan-EP7-Docs/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Ran-Online-Development/zRan-EP7-Docs',
            },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} zRan Online.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },
};

module.exports = config;
