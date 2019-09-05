const { exec } = require('pkg');

const targets = [
  { target: 'linux-x64', out: './dist/pb-linux' },
  { target: 'macos-x64', out: './dist/pb-macos' },
  { target: 'win-x64', out: './dist/pb-windows.exe' },
];

targets.forEach(target => {
  exec(['./index.js', '--target', target.target, '--output', target.out]).then(() => {
    console.log(`${target.target} build done!`);
  });
});
