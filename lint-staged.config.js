module.exports = {
  '*.{json,js,ts,yml,yaml}': ['prettier --write', 'git add'],
  '*.{js,ts}': ['npm run lint -- --fix', 'git add'],
  '*.ts': () => 'npm run test',
};
