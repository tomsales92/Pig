import Expense from '../models/Expense';

class ExpensesRepository {
  private expenses: Expense[];

  constructor() {
    this.expenses = [];
  }

  public create(name: string, value: number, date: Date): Expense {
    const expense = new Expense(name, value, date);
    this.expenses.push(expense);

    return expense;
  }
}

export default ExpensesRepository;
