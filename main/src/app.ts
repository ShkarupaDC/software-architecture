import { FastifyPluginAsync } from 'fastify';
import { fastifyAutoload } from 'fastify-autoload';
import { handleError } from '@shared/libs/errors/error-handler';
import { join } from 'path/posix';

export const app: FastifyPluginAsync = async (fastify) => {
  fastify.register(fastifyAutoload, {
    dir: join(__dirname, 'plugins'),
  });
  fastify.setErrorHandler(handleError);
};
