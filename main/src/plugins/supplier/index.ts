import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import { SupplierDao } from '@plugins/supplier/dao';
import { SupplierService } from '@plugins/supplier/service';

const supplier: FastifyPluginAsync = async (fastify) => {
  const dao = new SupplierDao(fastify.db);
  const service = new SupplierService(dao);
  fastify.decorate('supplierService', service);
};

export default fp(supplier, {
  name: 'supplier',
  decorators: { fastify: ['db'] },
  dependencies: ['db'],
});
