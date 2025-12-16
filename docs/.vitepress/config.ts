import { defineConfig } from 'vitepress';
import meta from '../../package.json';

export default defineConfig({
  lang: 'en-US',
  title: 'vue-chart-3',
  description: 'A simple wrapper around Chart.js 3 for Vue 2 & 3',

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', sizes: '48x48', href: '/favicon.ico' }],
    ['meta', { property: 'og:image', content: 'https://vue-chart-3.netlify.com/assets/logo.png' }],
    ['meta', { property: 'twitter:image', content: 'https://vue-chart-3.netlify.com/assets/logo.png' }],
    ['meta', { property: 'og:description', content: meta.description }],
    ['meta', { name: 'description', content: meta.description }],
    ['meta', { name: 'keywords', content: meta.keywords.join(',') }],
    [
      'script',
      {
        defer: '',
        src: 'https://cloud.umami.is/script.js',
        'data-website-id': 'c8b8b5f6-8a4d-4433-86c4-57a4e1af96e4',
      },
    ],
  ],

  themeConfig: {
    logo: '/images/logo.svg',

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Components', link: '/components/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          link: '/guide/',
        },
        {
          text: 'Configuration',
          collapsed: false,
          items: [
            { text: 'Pre-requisites', link: '/guide/configuration/' },
            { text: 'Plugins', link: '/guide/configuration/plugins' },
          ],
        },
        {
          text: 'Usage',
          collapsed: false,
          items: [
            { text: 'Using Components', link: '/guide/usage/' },
            { text: 'Chart Instance', link: '/guide/usage/chart-instance' },
            { text: 'Dynamic Data', link: '/guide/usage/dynamic-data' },
            { text: 'Manual Update', link: '/guide/usage/manual-update' },
            { text: 'TypeScript', link: '/guide/usage/typescript' },
            { text: 'Actions', link: '/guide/usage/actions' },
          ],
        },
        {
          text: 'Examples',
          collapsed: false,
          items: [
            { text: 'Vue 3', link: '/guide/examples/vue3' },
            { text: 'Vue 2 Composition', link: '/guide/examples/vue2-composition' },
            { text: 'Vue 2 Class', link: '/guide/examples/vue2-class' },
            { text: 'Nuxt 2', link: '/guide/examples/nuxt2' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Components',
          link: '/components/',
        },
        {
          text: 'Chart Hooks (beta)',
          collapsed: false,
          items: [
            { text: 'Hooks', link: '/components/hooks/' },
            { text: 'Example', link: '/components/hooks/example' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/victorgarciaesgi/vue-chart-3' }],

    editLink: {
      pattern: 'https://github.com/victorgarciaesgi/vue-chart-3/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: 'algolia',
      options: {
        appId: 'BH4D9OD16A',
        apiKey: 'f8206c1e05cedf8dcf7769bb3b87ada3',
        indexName: 'vue-chart-3',
      },
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Victor Garcia',
    },
  },
});

