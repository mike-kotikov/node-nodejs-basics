import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'node:fs/promises';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const archivePath = `${__dirname}files/archive.gz`;
const outputFilePath = `${__dirname}files/fileToCompress.txt`;

const archiveReadStream = createReadStream(archivePath);
const fileWriteStream = createWriteStream(outputFilePath);

const unzip = createUnzip();

const decompress = async () => {
  await pipeline(archiveReadStream, unzip, fileWriteStream);
  // Remove archive after file unzip
  await rm(archivePath);
};

await decompress();
