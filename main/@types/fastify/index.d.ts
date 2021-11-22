import { DBConnection } from '../../../shared/interfaces/db/connection';
import { MainService } from '../../src/plugins/search/main.service';

declare module 'fastify' {
  interface FastifyInstance {
    db: DBConnection;
    mainService: MainService;
  }
}
