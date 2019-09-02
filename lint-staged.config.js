module.exports = {
  '*.{json,js,ts,yml,yaml}': ['prettier --write', 'git add'],
  '*.{js,ts}': ['npm run lint:es -- --fix', 'git add'],
  '*.md': 'markdownlint',
  '*.ts': () => 'npm run test',
};
