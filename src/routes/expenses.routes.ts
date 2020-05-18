import { Router } from 'express';
import Expense from '../models/Expense';

const expensesRouter = Router();

const expenses: Expense[] = [];

expensesRouter.post('/', (request, response) => {
  const { name, value, date } = request.body;

  const expense = new Expense(name, value, date);

  expenses.push(expense);
  return response.json(expense);
});

export default expensesRouter;
