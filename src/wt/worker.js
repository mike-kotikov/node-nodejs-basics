import { parentPort } from 'node:worker_threads';

const nthFibonacci = n => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  const random = Math.random();

  parentPort.on('message', num => {
    if (random > 0.5) {
      throw new Error('Worker error');
    }

    const result = nthFibonacci(num);

    parentPort.postMessage(result);
  });
};

sendResult();
