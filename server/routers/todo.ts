import { router, publicProcedure } from '../trpc';

export const todoRouter = router({
  getTodos: publicProcedure.query(async () => 'Hello'),
});
