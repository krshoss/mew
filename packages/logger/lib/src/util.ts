// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/indent */
import { format, LoggerOptions, transports } from 'winston'
import { MewLoggerConfig } from './types'
import { AbstractConfigSetColors } from 'winston/lib/winston/config'
import { join as joinPath } from 'node:path'

export function transformConfig(
  config: MewLoggerConfig
): [LoggerOptions, AbstractConfigSetColors] {
  const winstonConfig: LoggerOptions = {
    transports: [],
    levels: {},
    format: format.combine(
      format.colorize(),
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.printf((info) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return `[${info.timestamp}] ${info.level}: ${info.message}`
      })
    )
  }

  if (Array.isArray(winstonConfig.transports)) {
    for (const output of config.outputs) {
      if (output.type === 'console') {
        winstonConfig.transports.push(
          new transports.Console({
            level: output.level
          })
        )
      } else if (output.type === 'file') {
        winstonConfig.transports.push(
          new transports.File({
            filename: joinPath(
              logPath,
              output.filename ? output.filename : output.level + '.log'
            ),
            level: output.level
          })
        )
      }
    }
  }

  for (const level in config.levels) {
    winstonConfig.levels = {
      ...winstonConfig.levels,
      [level]: config.levels[level].priority
    }
  }

  let colors: AbstractConfigSetColors = {}

  // Iterate over the levels object and add the appropriate levels and colors
  for (const level in config.levels) {
    colors = {
      ...colors,
      [level]: config.levels[level].color
    }
  }

  return [winstonConfig, colors]
}

export function getConfig(): MewLoggerConfig {
  return {
    outputs: [
      { type: 'console', level: 'debug' },
      { type: 'file', filename: 'error.log', level: 'warning' },
      { type: 'file', level: 'info' },
      { type: 'file', level: 'debug' }
    ],
    levels: {
      error: { priority: 0, color: 'red' },
      warning: { priority: 1, color: 'yellow' },
      info: { priority: 2, color: 'blue' },
      debug: { priority: 3, color: 'gray' }
    }
  }
}

export function resolveConfig(): [LoggerOptions, AbstractConfigSetColors] {
  const config: MewLoggerConfig = getConfig()

  return transformConfig(config)
}

export const logPath = joinPath(process.cwd(), 'logs')
