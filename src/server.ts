import Fastify, { FastifyInstance } from 'fastify';

const fastify: FastifyInstance = Fastify({ logger: true });

const HOST = '0.0.0.0';
const PORT = 3000;

fastify.get('/', async (_, reply) => {
  reply.send({ hello: 'world' });
});

const start = async () => {
  try {
    fastify.listen(PORT, HOST, () => {
      console.log(`Server is runnning on http://${HOST}:${PORT}`);
    });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
