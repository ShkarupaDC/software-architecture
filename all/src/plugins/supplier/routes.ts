import { FastifyPluginAsync } from 'fastify';

import { detailedItemSchema } from '@shared/schema/domain/detailed-item';
import { itemIdSchema } from '@shared/schema/domain/item-id';
import { priceListSchema } from '@schema/domain/price-list';

export const routes: FastifyPluginAsync = async (fastify) => {
  const { itemService } = fastify;

  fastify.route({
    method: 'GET',
    url: '/price-list',
    schema: {
      response: { 200: priceListSchema },
    },
    handler: async (request, reply) => {
      const priceList = await itemService.getPriceList();
      reply.code(200).send(priceList);
    },
  });

  fastify.route<{ Params: { id: number } }>({
    method: 'GET',
    url: '/details/:id',
    schema: {
      params: itemIdSchema,
      response: { 200: detailedItemSchema },
    },
    handler: async (request, reply) => {
      const { id } = request.params;
      const item = await itemService.getItem(id);
      reply.code(200).send(item);
    },
  });
};
