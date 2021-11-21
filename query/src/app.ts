import { FastifyPluginAsync } from 'fastify';
import { fastifyAutoload } from 'fastify-autoload';
import { join } from 'path/posix';

export const app: FastifyPluginAsync = async (fastify) => {
  fastify.register(fastifyAutoload, {
    dir: join(__dirname, 'plugins'),
  });
};
