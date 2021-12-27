import { ReservationDao } from '@plugins/reservation/dao';
import { Reservation } from '@plugins/reservation/interfaces/reservation';
import { NewReservation } from '@plugins/reservation/interfaces/new-reservation';

export class ReservationService {
  constructor(private dao: ReservationDao) {}

  async getById(id: number): Promise<Reservation | undefined> {
    return await this.dao.getById(id);
  }

  async create(reservation: NewReservation): Promise<Reservation> {
    return await this.dao.create(reservation);
  }
}
