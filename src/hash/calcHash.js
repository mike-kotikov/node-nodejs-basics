import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const filePath = `${__dirname}files/fileToCalculateHashFor.txt`;

const fileHash = createHash('sha256');
const fileReadStream = createReadStream(filePath)

const calculateHash = async () => {
    fileReadStream.on('readable', () => {
        const content = fileReadStream.read();

        if (content) {
            fileHash.update(content);
        } else {
            console.log(fileHash.digest('hex'));
        }
    })
};

await calculateHash();