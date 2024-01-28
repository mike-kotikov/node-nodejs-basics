import { fileURLToPath } from 'node:url';
import { availableParallelism } from 'node:os';
import { Worker } from 'node:worker_threads';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const workerPath = `${__dirname}worker.js`;

const allowedNumOfWorkers = availableParallelism();

const performCalculations = async () => {
  const results = new Map();
  const createdWorkersIds = [];

  const printResults = () => console.log(createdWorkersIds.map(id => results.get(id)));

  for (let i = 10; i < 10 + allowedNumOfWorkers; ++i) {
    const worker = new Worker(workerPath);

    createdWorkersIds.push(worker.threadId);

    worker.on('message', result => {
      results.set(worker.threadId, { status: 'resolved', data: result });
      worker.terminate();

      if (results.size === allowedNumOfWorkers) {
        printResults();
      }
    });

    worker.on('error', () => {
      results.set(worker.threadId, { status: 'error', data: null });

      if (results.size === allowedNumOfWorkers) {
        printResults();
      }
    });

    worker.postMessage(i);
  }
};

await performCalculations();
