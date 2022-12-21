# 🐱 `@mewlabs/logger`

[![npm version](https://img.shields.io/npm/v/@mewlab/logger?color=%23ff8906&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@mewlab/logger)

Welcome to `@mewlab/logger`! This is a utility library that allows you to easily create and customize your own logger in your Node.js applications.

## 🚀 Getting Started

To get started with `@mewlab/logger`, you'll need to install it in your project:

```bash
npm install @mewlab/logger
```

Or with Yarn:

```
yarn add @mewlab/logger
```

Then, you can import and use the createLogger function to create your own logger:

```js
const { createLogger } = require('@mewlab/logger')

const logger = createLogger()

logger.log('info', 'Hello, world!')
```

## 🛠 Configuration

You can customize your logger by passing in a configuration object to the createLogger function. For example:

```js
import createLogger, { MewLoggerConfig } from '@mewlab/logger'

const config: MewLoggerConfig = {
  outputs: [
    {
      type: 'console',
      level: 'info'
    },
    {
      type: 'file',
      filename: 'logs/app.log',
      level: 'debug'
    }
  ],
  levels: {
    info: { priority: 1, color: 'blue' },
    debug: { priority: 2, color: 'green' },
    warn: { priority: 3, color: 'yellow' },
    error: { priority: 4, color: 'red' }
  }
}

const logger = createLogger(config)
```

## 📜 API

The `@mewlab/logger` package exports the following objects:

### MewLogger

The `MewLogger` class represents a logger instance. It has the following methods:

```ts
log(level: string, message: string, ...meta: any): MewLogger
```

Log a message with the specified log level. The level argument can be any string, that has been specified in the `config.levels` object, The message argument is a string that contains the log message. The meta argument is an optional set of additional data that will be sent to winston.

```js
log.log('info', 'Hello, world!')
log.log('debug', 'This is a debug message')
```

### createLogger([config]): MewLogger

Creates a new instance of MewLogger.

#### **Arguments**

- config (optional) - an object containing configuration options for the logger.

Default Config:

```json
{
  "outputs": [
    {
      "type": "console",
      "level": "info"
    },
    {
      "type": "file",
      "filename": "app.log", // Will automatically be created in the logs directory of your the current working directory
      "level": "debug"
    }
  ],
  "levels": {
    "info": { "priority": 1, "color": "blue" },
    "debug": { "priority": 2, "color": "green" },
    "warn": { "priority": 3, "color": "yellow" },
    "error": { "priority": 4, "color": "red" }
  }
}
```

## License

This project iis licensed under the MIT License
