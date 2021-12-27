import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import { ReservationDao } from '@plugins/reservation/dao';
import { ReservationService } from '@plugins/reservation/service';

const reservation: FastifyPluginAsync = async (fastify) => {
  const dao = new ReservationDao(fastify.db);
  const service = new ReservationService(dao);
  fastify.decorate('reservationService', service);
};

export default fp(reservation, {
  name: 'reservation',
  decorators: { fastify: ['db'] },
  dependencies: ['db'],
});
