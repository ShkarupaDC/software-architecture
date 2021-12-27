import { IResolvers } from 'mercurius';

import { ItemService } from '@plugins/menu-item/service';
import { SupplierService } from '@plugins/supplier/service';
import { ReservationService } from '@plugins/reservation/service';
import { NewMenuItem } from '@plugins/menu-item/interfaces/new-item';
import { UpdateMenuItem } from '@plugins/menu-item/interfaces/update-item';
import { NewReservation } from '@plugins/reservation/interfaces/new-reservation';
import { MainService } from '@plugins/search/main.service';
import { SearchQuery } from '@shared/interfaces/search/search-query';
import { StringQueryParams } from '@shared/interfaces/search/string-query-params';

export const makeResolvers = (
  mainService: MainService,
  itemService: ItemService,
  supplierService: SupplierService,
  reservationService: ReservationService
): IResolvers => {
  return {
    Query: {
      item: async (_: unknown, args: { name: string }) => {
        const { name: pattern } = args;
        const query = {
          name: { contains: pattern } as StringQueryParams,
        } as SearchQuery;
        const result = await mainService.getItemsByQuery(query);
        return result.items;
      },
      supplier: async (_: unknown, args: { id: number }) => {
        const { id } = args;
        return await supplierService.getById(id);
      },
      reservation: async (_: unknown, args: { id: number }) => {
        const { id } = args;
        return await reservationService.getById(id);
      },
    },
    Mutation: {
      createItem: async (_: unknown, args: { item: NewMenuItem }) => {
        const { item } = args;
        return await itemService.addItem(item);
      },
      updateItem: async (
        _: unknown,
        args: { id: number; item: UpdateMenuItem }
      ) => {
        const { id, item } = args;
        return await itemService.updateItem(id, item);
      },
      deleteItem: async (_: unknown, args: { id: number }) => {
        const { id } = args;
        return await itemService.deleteItem(id);
      },
      createReservation: async (
        _: unknown,
        args: { reservation: NewReservation }
      ) => {
        const { reservation } = args;
        return await reservationService.create(reservation);
      },
    },
  };
};
