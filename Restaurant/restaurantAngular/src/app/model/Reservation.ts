export class Reservation {

  id: number | undefined;

  location: string | undefined;
  name: string | undefined;
  howMany: number = 1;
  datetime: string | undefined;

  confirmationNumber: string | undefined;
}
