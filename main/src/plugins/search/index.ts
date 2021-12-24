import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import { routes } from '@plugins/search/routes';
import { MainService } from '@plugins/search//main.service';
import { AllService } from '@plugins/search//all.service';
import { QueryService } from '@plugins/search//query.service';
import { MainDao } from '@plugins/search//dao';

const search: FastifyPluginAsync = async (fastify) => {
  const dao = new MainDao(fastify.db);
  const allService = new AllService();
  const queryService = new QueryService();
  const service = new MainService(dao, allService, queryService);

  service.scheduleUpdate();
  fastify.decorate('mainService', service);
  fastify.register(routes);
};

export default fp(search, {
  name: 'search',
  decorators: { fastify: ['db'] },
  dependencies: ['db'],
});
