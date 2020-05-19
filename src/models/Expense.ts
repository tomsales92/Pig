import { uuid } from 'uuidv4';

class Expense {
  id: string;

  name: string;

  value: number;

  date: Date;

  constructor({ name, value, date }: Omit<Expense, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.value = value;
    this.date = date;
  }
}

export default Expense;
