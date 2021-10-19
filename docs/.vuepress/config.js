const packageJson = require('../../packages/vue-chart-3/package.json');

module.exports = {
  base: '/',
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vue-chart-3',
      description: 'Chart.js v3 for Vue 2 and Vue 3',
    },
  },
  plugins: [
    [
      'autometa',
      {
        canonical_base: 'https://vue-chart-3.netlify.com',
      },
    ],
    'tabs',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
      },
    ],
  ],
  head: [
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://vue-chart-3.netlify.com/assets/logo.png',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://vue-chart-3.netlify.com/assets/logo.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: packageJson.description,
      },
    ],
    [
      'meta',
      {
        name: 'description',
        content: packageJson.description,
      },
    ],

    [
      'meta',
      {
        name: 'keywords',
        content: packageJson.keywords,
      },
    ],
  ],
  themeConfig: {
    repo: 'victorgarciaesgi/vue-chart-3',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: 'Last Updated',
    logo: '/assets/logo.svg',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        sidebar: {
          '/guide/': [
            '',
            {
              title: 'Configuration',
              collapsable: false,
              children: ['/guide/configuration/', '/guide/configuration/plugins'],
            },
            {
              title: 'Usage',
              collapsable: false,
              children: [
                '/guide/usage/',
                '/guide/usage/chart-instance',
                '/guide/usage/dynamic-data',
                '/guide/usage/typescript',
                '/guide/usage/actions',
              ],
            },
            {
              title: 'Examples',
              collapsable: false,
              children: ['/guide/examples/vue2', '/guide/examples/vue3'],
            },
          ],
          '/components/': [
            '',
            {
              title: 'Chart hooks (alpha)',
              collapsable: false,
              children: ['/components/hooks/', '/components/hooks/example'],
            },
          ],
        },
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'Components',
            link: '/components/',
          },
        ],
      },
    },
  },
};
