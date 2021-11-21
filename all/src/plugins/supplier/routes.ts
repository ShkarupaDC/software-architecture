import { FastifyPluginAsync } from 'fastify';

export const routes: FastifyPluginAsync = async (fastify) => {
  const { itemService } = fastify;

  fastify.route({
    method: 'GET',
    url: '/price-list',
    handler: async (request, reply) => {
      const priceList = await itemService.getPriceList();
      reply.code(200).send(priceList);
    },
  });

  fastify.route<{ Params: { id: number } }>({
    method: 'GET',
    url: '/details/:id',
    handler: async (request, reply) => {
      const { id } = request.params;
      const item = await itemService.getItem(id);
      reply.code(200).send(item);
    },
  });
};
