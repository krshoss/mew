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
    ['@semantic-release/npm', { npm_token: '${{ secrets.NPM_TOKEN }}' }],
    [
      'semantic-release-npm-deprecate-old-versions',
      {
        rules: [
          'supportLatest',
          'supportPreReleaseIfNotReleased',
          'deprecateAll'
        ]
      }
    ],
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
        assets: ['CHANGELOG.md', 'lib/dist/**'],
        gh_token: '${{ secrets.GH_TOKEN }}'
      }
    ]
  ],
  preset: 'angular',
  ci: true,
  debug: true
}
