import { fileURLToPath } from 'node:url';
import { writeFile, access } from 'node:fs/promises';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const filePath = `${__dirname}files/fresh.txt`;

const checkFileExists = async path => {
  try {
    await access(path);

    return true;
  } catch (err) {
    return false;
  }
};

const create = async () => {
  const fileExists = await checkFileExists(filePath);

  if (fileExists) {
    throw new Error('FS operation failed');
  }

  // Create file with contents
  await writeFile(filePath, 'I am fresh and young');
};

await create();
