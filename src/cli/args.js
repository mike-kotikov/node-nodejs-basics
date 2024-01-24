import { argv } from 'node:process';

const ARG_PREFIX = '--';

const parseArgs = () => {
  const resultArr = [];

  for (let i = 0; i < argv.length; ++i) {
    if (!argv[i].includes(ARG_PREFIX)) {
      continue;
    }
    resultArr.push(`${argv[i].slice(2)} is ${argv[i + 1]}`);
  }

  console.log(resultArr.join(', '));
};

parseArgs();
