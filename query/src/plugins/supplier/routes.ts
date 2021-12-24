import { FastifyPluginAsync } from 'fastify';

import { querySchema } from '@shared/schema/search/query';
import { pageNumberSchema } from '@shared/schema/domain/page-number';
import { itemListSchema } from '@shared/schema/domain/item-list';
import { itemPageSchema } from '@shared/schema/domain/item-page';
import { SearchQuery } from '@shared/interfaces/search/search-query';
import { PageNumber } from '@interfaces/domain/page-number';

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
      const items = await itemService.getByQuery(query);
      reply.code(200).send(items);
    },
  });

  fastify.route<{ Querystring: PageNumber }>({
    method: 'GET',
    url: '/price-list',
    schema: {
      querystring: pageNumberSchema,
      response: { 200: itemPageSchema },
    },
    handler: async (request, reply) => {
      const { page } = request.query;
      const pageItem = await itemService.getPage(page);
      reply.code(200).send(pageItem);
    },
  });
};
