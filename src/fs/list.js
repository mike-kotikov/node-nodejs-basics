import { fileURLToPath } from 'node:url';
import { readdir } from 'node:fs/promises';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const filesDirectoryLocation = `${__dirname}files`;

const list = async () => {
  try {
    console.log(await readdir(filesDirectoryLocation));
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
