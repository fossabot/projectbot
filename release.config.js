module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogTitle:
          '# Changelog \n\n ### All notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.',
      },
    ],
    [
      '@semantic-release/exec',
      {
        publishCmd: 'lerna publish ${nextRelease.version} -y',
      },
    ],
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};
