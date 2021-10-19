# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
