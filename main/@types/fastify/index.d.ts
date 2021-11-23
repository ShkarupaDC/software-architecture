import { DBConnection } from '../../../shared/interfaces/db/connection';
import { MainService } from '../../src/plugins/search/main.service';
import { ItemService } from '../../src/plugins/menu-items/service';

declare module 'fastify' {
  interface FastifyInstance {
    db: DBConnection;
    mainService: MainService;
    itemService: ItemService;
  }
}
