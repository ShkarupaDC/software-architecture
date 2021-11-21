import { FastifyPluginAsync } from 'fastify';
import { SearchQuery } from '@interfaces/domain/search-query';
import { querystring } from './schema';

export const routes: FastifyPluginAsync = async (fastify) => {
  const { itemService } = fastify;

  fastify.route<{ Querystring: SearchQuery }>({
    method: 'GET',
    url: '/search',
    schema: { querystring },
    handler: async (request, reply) => {
      const { query } = request;
      const items = await itemService.getItemsByQuery(query);
      reply.code(200).send(items);
    },
  });
};
