import { FastifyPluginAsync } from 'fastify';

import { config } from '@config/config';
import { delay } from '@lib/delay';
import { detailedItemSchema } from '@shared/schema/domain/detailed-item';
import { itemIdSchema } from '@shared/schema/domain/item-id';
import { priceListSchema } from '@schema/domain/price-list';

const { search } = config.app;

export const routes: FastifyPluginAsync = async (fastify) => {
  const { itemService } = fastify;

  fastify.route({
    method: 'GET',
    url: '/price-list',
    schema: {
      response: { 200: priceListSchema },
    },
    handler: async (_, reply) => {
      const priceList = await itemService.getPriceList();
      await delay(search.delay);
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
