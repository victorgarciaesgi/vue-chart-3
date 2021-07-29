module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      // { pattern: 'packages/vue-chart-3/**/*.+(ts|mjs)' },
      { pattern: 'tests/**/*.+(ts|js)' },
    ],
    exclude: [],
    preprocessors: {
      // 'packages/vue-chart-3/**/*.+(ts|mjs)': ['karma-typescript', 'coverage'],
      'tests/**/*.+(ts|js)': ['karma-typescript'],
    },
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
      bundlerOptions: {
        transforms: [require('karma-typescript-es6-transform')()],
      },
    },
    reporters: ['progress', 'coverage', 'karma-typescript'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,
    esm: {
      nodeResolve: true,
    },
  });
};
