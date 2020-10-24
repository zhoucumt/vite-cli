#! /usr/bin/env node

const createServer = require('../src/index.js');

createServer().listen(4000, () => {
  console.log('server is running on port 4000');
});
