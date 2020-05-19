import Expense from '../models/Expense';

interface CreateInterfaceDTO {
  name: string;
  value: number;
  date: Date;
}

class ExpensesRepository {
  private expenses: Expense[];

  constructor() {
    this.expenses = [];
  }

  public all(): Expense[] {
    return this.expenses;
  }

  public create({ name, value, date }: CreateInterfaceDTO): Expense {
    const expense = new Expense({ name, value, date });
    this.expenses.push(expense);

    return expense;
  }
}

export default ExpensesRepository;
