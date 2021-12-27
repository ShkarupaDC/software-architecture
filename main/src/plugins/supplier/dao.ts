import { DBConnection } from '@shared/interfaces/db/connection';
import { Supplier } from '@plugins/supplier/interfaces/supplier';

export class SupplierDao {
  constructor(private db: DBConnection) {}

  async getById(id: number): Promise<Supplier | undefined> {
    const record = await this.db<Supplier>('suppliers').where({ id }).first();
    return record;
  }
}
