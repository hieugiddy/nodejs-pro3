export class User {
  fullname: string;
  address: string;
  creditCard: string;

  constructor() {
    (this.fullname = ''), (this.address = ''), (this.creditCard = '');
  }
}
