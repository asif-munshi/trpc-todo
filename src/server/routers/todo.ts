import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";
import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { TodoValidator } from "@/lib/todo-validator";

const defaultTodoSelect = {
  id: true,
  title: true,
  status: true,
  description: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.TodoSelect;

export const todoRouter = router({
  getAll: publicProcedure.query(async () => {
    const todo = await prisma.todo.findMany({
      select: defaultTodoSelect,
    });

    if (!todo) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: `Todo NOT_FOUND`,
      });
    }

    return todo;
  }),

  add: publicProcedure.input(TodoValidator).mutation(async ({ input }) => {
    const todo = await prisma.todo.create({
      data: input,
      select: defaultTodoSelect,
    });

    if (!todo) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `No todo was created`,
      });
    }

    return todo;
  }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id } = input;
      const todo = await prisma.todo.delete({
        where: { id },
        select: defaultTodoSelect,
      });

      if (!todo) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `No todo was created`,
        });
      }

      return todo;
    }),
});
