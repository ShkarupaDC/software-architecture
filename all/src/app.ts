import { FastifyPluginAsync } from 'fastify';
import { fastifyAutoload } from 'fastify-autoload';
import { join } from 'path/posix';

import { handleError } from '@shared/libs/errors/error-handler';

export const app: FastifyPluginAsync = async (fastify) => {
  fastify.register(fastifyAutoload, {
    dir: join(__dirname, 'plugins'),
  });
  fastify.setErrorHandler(handleError);
};
