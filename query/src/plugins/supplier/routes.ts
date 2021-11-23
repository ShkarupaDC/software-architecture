import { FastifyPluginAsync } from 'fastify';
import { SearchQuery } from '@shared/interfaces/search/search-query';

import { querySchema } from '@shared/schema/search/query';
import { itemListSchema } from '@shared/schema/domain/item-list';

export const routes: FastifyPluginAsync = async (fastify) => {
  const { itemService } = fastify;

  fastify.route<{ Querystring: SearchQuery }>({
    method: 'GET',
    url: '/search',
    schema: {
      querystring: querySchema,
      response: { 200: itemListSchema },
    },
    handler: async (request, reply) => {
      const { query } = request;
      const items = await itemService.getItemsByQuery(query);
      reply.code(200).send(items);
    },
  });
};
