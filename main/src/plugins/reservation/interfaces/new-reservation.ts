import { Reservation } from '@src/plugins/reservation/interfaces/reservation';

export type NewReservation = Omit<Reservation, 'id'>;
