import { fileURLToPath } from 'node:url';
import { open } from 'node:fs/promises';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fileToReadPath = `${__dirname}files/fileToRead.txt`;

const read = async () => {
  try {
    const file = await open(fileToReadPath);

    for await (const line of file.readLines()) {
      console.log(line);
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
