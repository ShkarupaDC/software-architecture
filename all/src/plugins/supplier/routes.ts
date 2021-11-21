import { FastifyPluginAsync } from 'fastify';

import { detailedItem } from '@shared/schema/domain/detailed-item';
import { priceList } from '@schema/domain/price-list';

export const routes: FastifyPluginAsync = async (fastify) => {
  const { itemService } = fastify;

  fastify.route({
    method: 'GET',
    url: '/price-list',
    schema: {
      response: { 200: priceList },
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
      response: { 200: detailedItem },
    },
    handler: async (request, reply) => {
      const { id } = request.params;
      const item = await itemService.getItem(id);
      reply.code(200).send(item);
    },
  });
};
