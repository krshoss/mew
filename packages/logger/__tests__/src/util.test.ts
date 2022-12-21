import { describe, it, expect } from '@jest/globals'
import { util } from '../..'

// Todo: Add tests for the transformConfig in util.ts

const { getConfig } = util

describe('getConfig', () => {
  it('should return the default config if no config file is found', async () => {
    const expectedResult = {
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

    expect(await getConfig()).toEqual(expectedResult)
  })
})
