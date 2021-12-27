import { DBConnection } from '@shared/interfaces/db/connection';
import { MainService } from '@plugins/search/main.service';
import { ItemService } from '@src/plugins/menu-item/service';
import { SupplierService } from '@plugins/supplier/service';
import { ReservationService } from '@plugins/reservation/service';

declare module 'fastify' {
  interface FastifyInstance {
    db: DBConnection;
    mainService: MainService;
    itemService: ItemService;
    supplierService: SupplierService;
    reservationService: ReservationService;
  }
}
