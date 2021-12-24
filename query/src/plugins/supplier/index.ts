import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import { routes } from './routes';
import { ItemDao } from './dao';
import { ItemService } from './service';

const supplier: FastifyPluginAsync = async (fastify) => {
  const dao = new ItemDao(fastify.db);
  const service = new ItemService(dao);

  fastify.decorate('itemService', service);
  fastify.register(routes);
};

export default fp(supplier, {
  name: 'supplier',
  decorators: { fastify: ['db'] },
  dependencies: ['db'],
});
