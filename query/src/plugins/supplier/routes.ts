import { FastifyPluginAsync } from 'fastify';
import { SearchQuery } from '@interfaces/domain/search-query';

import { query } from '@schema/search/query';
import { itemList } from '@schema/domain/item-list';

export const routes: FastifyPluginAsync = async (fastify) => {
  const { itemService } = fastify;

  fastify.route<{ Querystring: SearchQuery }>({
    method: 'GET',
    url: '/search',
    schema: {
      querystring: query,
      response: { 200: itemList },
    },
    handler: async (request, reply) => {
      const { query } = request;
      const items = await itemService.getItemsByQuery(query);
      reply.code(200).send(items);
    },
  });
};
