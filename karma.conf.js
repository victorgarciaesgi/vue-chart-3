module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [{ pattern: 'src/**/*.+(ts|cjs)' }, { pattern: 'tests/**/*.+(ts|cjs)' }],
    exclude: [],
    preprocessors: {
      'src/**/*.+(ts|cjs)': ['karma-typescript', 'coverage'],
      'tests/**/*.+(ts|cjs)': ['karma-typescript'],
    },
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
      bundlerOptions: {
        transforms: [require('karma-typescript-es6-transform')()],
        resolve: {
          alias: {
            nanoid: 'node_modules/nanoid/index.browser.js',
          },
          extensions: ['.js'],
        },
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
