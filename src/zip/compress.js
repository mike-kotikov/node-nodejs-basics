import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'node:fs/promises';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fileToCompressPath = `${__dirname}files/fileToCompress.txt`;
const outputArchivePath = `${__dirname}files/archive.gz`;

const fileReadStream = createReadStream(fileToCompressPath);
const fileWriteStream = createWriteStream(outputArchivePath);

const gzip = createGzip();

const compress = async () => {
  await pipeline(fileReadStream, gzip, fileWriteStream);
  // Remove file after it's been zipped
  await rm(fileToCompressPath);
};

await compress();
