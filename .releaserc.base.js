// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-template-curly-in-string */
module.exports = {
  extends: 'semantic-release-monorepo',
  branches: [{ name: 'main' }],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular'
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'chore(release): 🤖 ${nextRelease.version} [skip ci]'
      }
    ],
    [
      '@semantic-release/github',
      {
        assets: ['CHANGELOG.md', 'lib/dist/**']
      }
    ]
  ],
  preset: 'angular',
  ci: true,
  debug: true
}
