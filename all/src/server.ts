import Fastify, { FastifyPluginAsync } from 'fastify';

import { app } from './app';
import { config } from './config/config';

const { port, host, logger } = config.server;

const startServer = (app: FastifyPluginAsync) => {
  try {
    const server = Fastify({ logger });
    server.register(app);
    server.listen(port, host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer(app);
