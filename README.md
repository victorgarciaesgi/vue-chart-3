# 📊 Chart.js 3 for Vue 2 and Vue 3

<p align="center">
  <a href='https://sgts.netlify.com/'>
    <img width='100' src="https://raw.githubusercontent.com/victorgarciaesgi/vue-chart-3/main/media/logo.svg" alt="sgts logo">
  </a>
</p>

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![npm downloads][npm-total-downloads-src]][npm-downloads-href]
<img src='https://img.shields.io/npm/l/vue-chart-3.svg'>

[npm-version-src]: https://img.shields.io/npm/v/vue-chart-3.svg
[npm-version-href]: https://www.npmjs.com/package/vue-chart-3
[npm-downloads-src]: https://img.shields.io/npm/dm/vue-chart-3.svg
[npm-total-downloads-src]: https://img.shields.io/npm/dt/vue-chart-3.svg
[npm-downloads-href]: https://www.npmjs.com/package/vue-chart-3

This package is a rewrite of [vue-chartjs](https://github.com/apertureless/vue-chartjs) for Chart.js 3, but written in Typescript with Vue 3 composition api in mind.

- `Vite.js` and `Nuxt 3` compatible 💯.

# [Documentation](https://vue-chart-3.netlify.app/)

[Full documentation](https://vue-chart-3.netlify.app/)

# Installation

## For Vue 3

```bash
npm i vue-chart-3
#or
yarn add vue-chart-3
#or
pnpm i vue-chart-3
```

## For Vue 2

```bash
npm i vue-chart-3@legacy
#or
yarn add vue-chart-3@legacy
#or
pnpm i vue-chart-3@legacy
```

# Important notes

## Using with Vue 3 or Vue 2

This package works with version 2.x and 3.x of Vue.

- Vue 3 works out-of-the-box
- Vue 2 requires `@vue/composition-api` package to also be installed and registered, to provide Vue 3's [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) features like `ref, defineComponent, computed, reactive`.

### ⚠️ Since `2.0.3` (for Vue 2 users), Vue composition api will not register itself. Update your project if you didn't do it manually!

# Demos

- Vue 3: [CodeSandbox demo Vue 3](https://codesandbox.io/s/demo-vue-chart-3-ugynm?file=/src/App.vue)
- Vue 2 + composition API: [CodeSandbox demo Vue 2 + composition](https://codesandbox.io/s/vue-chart-3-vue-2-mw54f?file=/src/App.vue)
- Vue 2 + Typescript + class API [CodeSandox demo Vue 2 + class](https://codesandbox.io/s/vue-chart-3-vue-2-class-api-f7gv1?file=/src/App.vue)
- Nuxt 2 + SSR [CodeSandbox demo Nuxt 2 + SSR](https://codesandbox.io/s/vue-chart-3-nuxt-2-mrtej?file=/pages/index.vue)
