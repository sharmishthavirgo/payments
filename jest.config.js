/** @type {import('jest').Config} */
const config = {
  // Use the Node.js environment for server-side code
  testEnvironment: 'node', //when testing from change it to jsdom
  // Configure SWC as the transformer
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
};

module.exports = config;