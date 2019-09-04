const { compile } = require('nexe');

const CURRENT_NODE_VERSION = '12.9.1';

compile({
  input: '../lib/cli.js',
  targets: [
    { arch: 'x64', platform: 'linux', version: CURRENT_NODE_VERSION },
    { arch: 'x64', platform: 'macos', version: CURRENT_NODE_VERSION },
    { arch: 'x64', platform: 'windows', version: CURRENT_NODE_VERSION },
  ],
  output: 'dist/pb',
  name: 'pb',
  ghToken: process.env.GH_TOKEN,
});
