import { z } from 'zod';
import { baseProcedure, createTRPCRouter, protectProcedure } from '../init';
import prisma from '@/lib/db';
export const appRouter = createTRPCRouter({
  getUsers: protectProcedure.query(({ctx}) => {
    console.log(ctx)

    console.log({userId : ctx.auth.user.id});
    return prisma.user.findMany({
      where : {
        id: ctx.auth.user.id
      } 
    });
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;