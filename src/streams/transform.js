import { stdin, stdout } from 'node:process';
import { pipeline } from 'node:stream/promises';

const transformStream = new TransformStream({
  transform: (data, controller) => {
    const strData = data.toString().trim();
    const reversed = strData.split('').reverse().join('');
    controller.enqueue(`${reversed}\n`);
  }
});

const transform = async () => {
  await pipeline(stdin, transformStream, stdout);
};

await transform();
