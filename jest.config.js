module.exports = {
  'collectCoverage': true,
  'verbose': true,
  'preset': 'ts-jest',
  'coverageDirectory': './coverage/',
  'testPathIgnorePatterns': [
    '/node_modules/',
    '/lib/',
    'icejs/bin/'
  ]
};
