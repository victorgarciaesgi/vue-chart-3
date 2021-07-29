module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      { pattern: 'packages/vue-chart-3/**/*.+(ts|mjs)' },
      { pattern: 'tests/**/*.+(ts|mjs)' },
    ],
    exclude: [],
    preprocessors: {
      'packages/vue-chart-3/**/*.+(ts|mjs)': ['karma-typescript', 'coverage'],
      'tests/**/*.+(ts|mjs)': ['karma-typescript'],
    },
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
    },
    reporters: ['progress', 'coverage', 'karma-typescript'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,
  });
};
