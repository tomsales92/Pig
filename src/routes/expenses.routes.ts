import { Router } from 'express';
import ExpensesRepository from '../repositories/expensesRepository';

const expensesRouter = Router();

const expensesRepository = new ExpensesRepository();

expensesRouter.post('/', (request, response) => {
  const { name, value, date } = request.body;

  const expense = expensesRepository.create(name, value, date);

  return response.json(expense);
});

export default expensesRouter;
