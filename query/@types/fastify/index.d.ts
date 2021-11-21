import { DBConnection } from '../../../shared/interfaces/db/connection';
import { ItemService } from 'src/plugins/supplier/service';

declare module 'fastify' {
  interface FastifyInstance {
    db: DBConnection;
    itemService: ItemService;
  }
}
