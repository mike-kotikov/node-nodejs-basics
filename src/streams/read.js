import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fileToReadPath = `${__dirname}files/fileToRead.txt`;

const fileReadStream = createReadStream(fileToReadPath, { encoding: 'utf8' });

const read = async () => {
  fileReadStream.on('end', () => {
    fileReadStream.close();
  });

  fileReadStream.pipe(stdout);
};

await read();
