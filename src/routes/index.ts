import { Router } from 'express';
import expensesRouter from './expenses.routes';

const routes = Router();

routes.use('/expenses', expensesRouter);

routes.get('/', (request, response) => {
  response.json({ message: 'teste' });
});

export default routes;
