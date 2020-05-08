module.exports = {
  'collectCoverage': true,
  'verbose': true,
  'preset': 'ts-jest',
  'coverageDirectory': './coverage/',
  'roots': [
    '<rootDir>/packages',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/packages/plugin-request/__test__/setup.ts'
  ],
  'testPathIgnorePatterns': [
    '/node_modules/',
    '/lib/',
    'icejs/bin/'
  ]
};
