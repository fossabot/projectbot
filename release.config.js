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
        assets: [
          { path: 'dist/linux/pb', label: 'Linux' },
          { path: 'dist/macos/pb', label: 'MacOS' },
          { path: 'dist/win/pb.exe', label: 'Windows' },
          { path: 'dist/*.tgz' },
        ],
      },
    ],
    '@semantic-release/git',
  ],
};
