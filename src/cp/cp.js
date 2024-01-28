import { fileURLToPath } from 'node:url';
import { fork } from 'node:child_process';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const scriptPath = `${__dirname}files/script.js`;

const spawnChildProcess = async args => {
  fork(scriptPath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([123, 'test string', true]);
