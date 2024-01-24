import { fileURLToPath } from 'node:url';
import { rename as fsRename } from 'node:fs/promises';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fileToRenamePath = `${__dirname}files/wrongFilename.txt`;
const newFilePath = `${__dirname}files/properFilename.md`;

const rename = async () => {
  try {
    await fsRename(fileToRenamePath, newFilePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
