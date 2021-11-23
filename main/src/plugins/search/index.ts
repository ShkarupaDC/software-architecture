import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import { routes } from './routes';
import { MainService } from './main.service';
import { AllService } from './all.service';
import { QueryService } from './query.service';
import { MainDao } from './dao';

const search: FastifyPluginAsync = async (fastify) => {
  const dao = new MainDao(fastify.db);
  const allService = new AllService();
  const queryService = new QueryService();
  const service = new MainService(dao, allService, queryService);

  fastify.decorate('mainService', service);
  fastify.register(routes);
};

export default fp(search, { name: 'search', dependencies: ['db'] });
