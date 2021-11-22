import { FastifyPluginAsync } from 'fastify';
import { SearchQuery } from '@shared/interfaces/search/search-query';

import { query } from '@shared/schema/search/query';
import { itemList } from '@shared/schema/domain/item-list';

export const routes: FastifyPluginAsync = async (fastify) => {
  const { mainService } = fastify;

  fastify.route<{ Querystring: SearchQuery }>({
    method: 'GET',
    url: '/search',
    schema: {
      querystring: query,
      response: { 200: itemList },
    },
    handler: async (request, reply) => {
      const { query } = request;
      const items = await mainService.getItemsByQuery(query);
      reply.code(200).send(items);
    },
  });
};
