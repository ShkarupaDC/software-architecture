import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import mercurius from 'mercurius';

import { makeResolvers } from '@plugins/graphql/resolvers';
import { schema } from '@plugins/graphql/schema.graphql';

const graphql: FastifyPluginAsync = async (fastify) => {
  const { mainService, itemService, supplierService, reservationService } =
    fastify;

  const resolvers = makeResolvers(
    mainService,
    itemService,
    supplierService,
    reservationService
  );
  fastify.register(mercurius, { schema, resolvers });
};

export default fp(graphql, {
  name: 'graphql',
  decorators: {
    fastify: [
      'mainService',
      'itemService',
      'supplierService',
      'reservationService',
    ],
  },
  dependencies: ['search', 'item', 'supplier', 'reservation'],
});
