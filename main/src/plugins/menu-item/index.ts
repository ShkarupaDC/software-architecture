import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import { routes } from '@plugins/menu-item/routes';
import { ItemDao } from '@plugins/menu-item/dao';
import { ItemService } from '@plugins/menu-item/service';

const item: FastifyPluginAsync = async (fastify) => {
  const dao = new ItemDao(fastify.db);
  const service = new ItemService(dao);

  fastify.decorate('itemService', service);
  fastify.register(routes);
};

export default fp(item, {
  name: 'item',
  decorators: { fastify: ['db'] },
  dependencies: ['db'],
});
