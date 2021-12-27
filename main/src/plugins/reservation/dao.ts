import { DBConnection } from '@shared/interfaces/db/connection';
import { NewReservation } from '@plugins/reservation/interfaces/new-reservation';
import { Reservation } from '@plugins/reservation/interfaces/reservation';

export class ReservationDao {
  constructor(private db: DBConnection) {}

  async getById(id: number): Promise<Reservation | undefined> {
    const record = await this.db<Reservation>('reservations')
      .where({ id })
      .first();
    return record;
  }

  async create(reservation: NewReservation): Promise<Reservation> {
    const [record] = await this.db<Reservation>('reservations')
      .insert(reservation)
      .returning('*');
    return record;
  }
}
