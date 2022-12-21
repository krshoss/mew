import winston, { addColors, LoggerOptions } from 'winston'
import { logPath, resolveConfig, transformConfig } from './util'
import { MewLoggerConfig } from './types'
import { AbstractConfigSetColors } from 'winston/lib/winston/config'
import { rmSync, mkdirSync, existsSync } from 'node:fs'

export class MewLogger {
  winston: winston.Logger
  log: (level: string, message: string, ...meta: any) => MewLogger

  constructor(config?: [LoggerOptions, AbstractConfigSetColors] | undefined) {
    addColors(config?.[1] ?? {})

    this.winston = winston.createLogger(
      config?.[0] ?? {
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.colorize(),
              winston.format.timestamp(),
              winston.format.printf((info) => {
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                return `${info.timestamp} ${info.level}: ${info.message}`
              })
            )
          })
        ]
      }
    )

    this.log = (level, message, ...meta) => {
      this.winston.log(level, message, ...meta)
      return this
    }

    this.log('info', 'MewLogger initialized')
  }
}

export function createLogger(config?: MewLoggerConfig): MewLogger {
  if (!existsSync(logPath)) {
    mkdirSync(logPath, { recursive: true })
  } else {
    rmSync(logPath, { recursive: true })
    mkdirSync(logPath, { recursive: true })
  }

  if (config !== undefined && config !== null) {
    return new MewLogger(transformConfig(config))
  } else {
    return new MewLogger(resolveConfig())
  }
}

export default createLogger

export * as util from './util'
export * as types from './types'
