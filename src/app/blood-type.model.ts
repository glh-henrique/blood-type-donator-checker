export class BloodType {
  type: string;
  receives_from: string[];
  donate_to: string[];

  constructor() {
    this.type = '';
    this.receives_from = [];
    this.donate_to = [];
  }
}
