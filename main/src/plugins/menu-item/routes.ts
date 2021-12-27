import { FastifyPluginAsync } from 'fastify';

import { itemIdSchema } from '@shared/schema/domain/item-id';
import { itemSchema } from '@schema/domain/item';
import { NewMenuItem } from '@plugins/menu-item/interfaces/new-item';

export const routes: FastifyPluginAsync = async (fastify) => {
  const { itemService } = fastify;

  fastify.route<{ Params: { id: number } }>({
    method: 'GET',
    url: '/items/:id',
    schema: {
      params: itemIdSchema,
      response: { 200: itemSchema },
    },
    handler: async (request, reply) => {
      const { id } = request.params;
      const item = await itemService.getItem(id);
      reply.code(200).send(item);
    },
  });

  fastify.route<{ Body: { item: NewMenuItem } }>({
    method: 'POST',
    url: '/items',
    schema: {
      body: { itemSchema },
    },
    handler: async (request, reply) => {
      const { item } = request.body;
      await itemService.addItem(item);
      reply.code(201).send();
    },
  });

  fastify.route<{ Body: { item: NewMenuItem }; Params: { id: number } }>({
    method: 'PUT',
    url: '/items/:id',
    schema: {
      params: itemIdSchema,
      body: { itemSchema },
    },
    handler: async (request, reply) => {
      const { id } = request.params;
      const { item } = request.body;
      await itemService.updateItem(id, item);
      reply.code(204).send();
    },
  });

  fastify.route<{ Params: { id: number } }>({
    method: 'DELETE',
    url: '/items/:id',
    schema: {
      params: itemIdSchema,
    },
    handler: async (request, reply) => {
      const { id } = request.params;
      await itemService.deleteItem(id);
      reply.code(204).send();
    },
  });
};
