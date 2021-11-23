import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import meta from '../../package.json';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'vue-chart-3',
  description: 'A simple wrapper around Chart.js 3 for Vue 2 & 3',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vue-chart-3',
      description: 'Chart.js v3 for Vue 2 and Vue 3',
    },
  },
  plugins: [
    // [
    //   '@vuepress/plugin-docsearch',
    //   {
    //     apiKey: '3a539aab83105f01761a137c61004d85',
    //     indexName: 'vuepress',
    //     searchParameters: {
    //       facetFilters: ['tags:v2'],
    //     },
    //   },
    // ],
  ],
  themeConfig: {
    repo: 'victorgarciaesgi/vue-chart-3',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: true,
    logo: '/images/logo.svg',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        sidebar: {
          '/guide/': [
            '',
            {
              text: 'Configuration',
              children: ['/guide/configuration/', '/guide/configuration/plugins'],
            },
            {
              text: 'Usage',
              children: [
                '/guide/usage/',
                '/guide/usage/chart-instance',
                '/guide/usage/dynamic-data',
                '/guide/usage/typescript',
                '/guide/usage/actions',
              ],
            },
            {
              text: 'Examples',
              children: ['/guide/examples/vue2', '/guide/examples/vue3'],
            },
          ],
          '/components/': [
            '',
            {
              text: 'Chart hooks (alpha)',
              children: ['/components/hooks/', '/components/hooks/example'],
            },
          ],
        },
        navbar: [
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
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '48x48',
        href: `/favicon.ico`,
      },
    ],
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
        content: meta.description,
      },
    ],
    [
      'meta',
      {
        name: 'description',
        content: meta.description,
      },
    ],

    [
      'meta',
      {
        name: 'keywords',
        content: meta.keywords.join(','),
      },
    ],
  ],
});
