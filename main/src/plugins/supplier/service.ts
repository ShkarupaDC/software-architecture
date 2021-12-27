import { SupplierDao } from '@plugins/supplier/dao';
import { Supplier } from '@plugins/supplier/interfaces/supplier';

export class SupplierService {
  constructor(private dao: SupplierDao) {}

  async getById(id: number): Promise<Supplier | undefined> {
    return await this.dao.getById(id);
  }
}
