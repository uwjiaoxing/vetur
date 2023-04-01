import glob from 'glob';
import { writeFileSync, readFileSync } from 'fs';

const regexp = /;(\w+?\.GlobSync=\w+?),\w+?\.Glob;/;
glob('dist/cli.js', { nocase: true }, (_, files) => {
  for (const file of files) {
    const cliData = readFileSync(file, 'utf-8').toString();
    const cliDataHack = cliData.replace(regexp, ';$1;');
    if (cliData === cliDataHack) {
      console.error('hack:cli 没有找到字符串 ' + regexp);
      process.exit(1);
    }
    writeFileSync('dist/cli.js', cliDataHack);
  }
});
