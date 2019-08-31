module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogTitle:
          '# Changelog\n\n#### This uses [Conventional Commits](https://conventionalcommits.org) for commit guidelines.',
      },
    ],
    [
      '@semantic-release/npm',
      {
        tarballDir: 'dist',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: 'dist/*.tgz',
      },
    ],
    '@semantic-release/git',
  ],
};
