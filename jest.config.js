module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testURL: 'http://localhost/',
  testEnvironment: 'jsdom',
};
