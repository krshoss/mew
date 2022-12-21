export interface MewLoggerConfig {
  outputs: Array<FileMewLoggerOutput | ConsoleMewLoggerOutput>
  levels: MewLoggerLevels
}

export interface MewLoggerLevels {
  info: { priority: number; color: string }
  [x: string]: { priority: number; color: string }
}

interface FileMewLoggerOutput {
  type: 'file'
  filename?: string
  level: string
}

interface ConsoleMewLoggerOutput {
  type: 'console'
  level: string
}
