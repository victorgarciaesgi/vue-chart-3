# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.0.9 (2022-02-21)

# 3.0.0 and 2.0.0 (2021-11-23)

- Breaking changes and new versions numbers

In previous versions, `vue-demi` was used. It worked really well, but as the project advanced, they were a lot of problems with vue-related typescript definitions, tests and conflict between dependencies.

This new system will keep `vue-chart-3` working for both Vue 2 & 3 with designated versions (`2.x` and `3.x` respectively), but each one designed for their specific Vue version.

The usage of components of hooks is unchanged for both versions.

Code wise, there is not big breaking changes. But the Vue 3 version will have improved type checking for components template (with Volar extension).

- New docs using vuepress next!

# 0.5.10 (2021-10-27)

- Fixed types for Vue 3 imports

# 0.5.10 (2021-10-25)

- Fix `postinstall` bugs with npm update

# 0.5.9 (2021-10-25)

- Fix `Plugin` types in hooks

# 0.4.7 (2021-07-18)

- `chartInstance` is now accessible by reference to the component!

# 0.4.5 (2021-07-18)

- Fixed call stack loop when using reactive options using data or ref
- Fixed bundle size thanks to @DRoet

# 0.4.1 (2021-07-16)

- Fixed component names taking chartId instead of chartType

# 0.4.0 (2021-07-16)

# Breaking changes

- Renamed `data` prop to `chartData` due to type merging issues

# Features

- All components are now correctly typed if using Volar on VSCode
- Added `ExtractComponentData` utility type
- Added `ExtractComponentProps` utility type
- Reactive `options`

# 0.4.0-alpha.1 (2021-07-15)

**Note:** Version bump only for package vue-chart-3
