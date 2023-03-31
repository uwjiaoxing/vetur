import glob from 'glob';
import { writeFileSync, readFileSync } from 'fs';

glob('dist/cli.js', { nocase: true }, (_, files) => {
  for (const file of files) {
    const cliData = readFileSync(file, 'utf-8').toString();
    writeFileSync('dist/cli.js', JSON.stringify(cliData.replace(/;(\w+.GlobSync=\w+),\w+.Glob;/, ';$1;'), null, 2));
  }
});
