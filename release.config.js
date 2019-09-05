module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogTitle:
          '<!-- markdownlint-disable -->\n\n# Changelog\n\n#### This uses [Conventional Commits](https://conventionalcommits.org) for commit guidelines.',
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
        assets: [
          { path: 'dist/pb-linux.zip', label: 'Linux' },
          { path: 'dist/pb-macos.zip', label: 'MacOS' },
          { path: 'dist/pb-win.zip', label: 'Windows' },
          { path: 'dist/*.tgz' },
        ],
      },
    ],
    '@semantic-release/git',
  ],
};
