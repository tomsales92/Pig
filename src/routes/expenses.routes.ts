import { Router } from 'express';
import { uuid } from 'uuidv4';

const expensesRouter = Router();

const expenses = [];

expensesRouter.post('/', (request, response) => {
  const { name, value, date } = request.body;

  const expense = {
    id: uuid(),
    name,
    value,
    date,
  };
  expenses.push(expense);
  return response.json(expense);
});

export default expensesRouter;
