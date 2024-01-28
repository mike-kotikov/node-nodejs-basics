import { fileURLToPath } from 'node:url';
import { rm } from 'node:fs/promises';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fileToRemovePath = `${__dirname}files/fileToRemove.txt`;

const remove = async () => {
  try {
    await rm(fileToRemovePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
