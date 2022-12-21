// @ts-check

const { createLogger } = require('../..')

createLogger({
  outputs: [
    {
      type: 'console',
      level: 'debug'
    }
  ],
  levels: {
    debug: { color: 'gray', priority: 6 },
    info: { color: 'green', priority: 5 }
  }
}).log('debug', 'Hello, world!')
