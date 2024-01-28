import { fileURLToPath } from 'node:url';
import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const originalFilesDirLocation = `${__dirname}files`;

const copiedFilesDirLocation = `${__dirname}files_copy`;

const copy = async () => {
  try {
    // Create directory for copied files
    await mkdir(copiedFilesDirLocation);

    // Get list of files in original directory
    const files = await readdir(originalFilesDirLocation);

    // Copy files to copy directory
    for (const fileName of files) {
      await copyFile(
        join(originalFilesDirLocation, fileName),
        join(copiedFilesDirLocation, fileName)
      );
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
