import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import { knex } from 'knex';
import { knexConfig } from 'knexfile';

const db: FastifyPluginAsync = async (fastify) => {
  const db = knex(knexConfig);
  fastify.decorate('db', db);
};

export default fp(db, { name: 'db' });
