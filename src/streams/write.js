import { fileURLToPath } from 'node:url';
import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fileToWritePath = `${__dirname}files/fileToWrite.txt`;

const writeStream = createWriteStream(fileToWritePath, { encoding: 'utf8' });

const write = async () => {
  stdin.pipe(writeStream);
};

await write();
