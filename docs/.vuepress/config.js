const packageJson = require('../../packages/vue-chart-3/package.json');

module.exports = {
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
          '/': getMainSidebar(),
        },
        nav: [
          {
            text: 'Guide',
            link: '/getting-started/',
          },
          {
            text: 'Api',
            link: '/api/',
          },
        ],
      },
    },
  },
};

function getMainSidebar() {
  return [
    {
      title: 'Getting started',
      collapsable: false,
      children: ['/getting-started/'],
    },
    {
      title: 'Configuration',
      collapsable: false,
      children: ['/configuration/', '/configuration/config', '/configuration/runtime'],
    },
  ];
}
