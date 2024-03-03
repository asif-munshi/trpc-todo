'use client';

import { Trash } from 'lucide-react';
import { trpc } from '@/app/_trpc/client';

import { cn } from '@/lib/utils';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Todo = () => {
  const utils = trpc.useUtils();

  const { data: todos, isLoading } = trpc.todo.getAll.useQuery();
  const { mutate: deleteTodo } = trpc.todo.delete.useMutation({
    onSuccess: () => {
      utils.todo.getAll.invalidate();
    },
  });

  const deleteHandler = (id: string) => {
    deleteTodo({ id: id });
  };

  if (isLoading) return <div>Loading...</div>;

  if (!todos?.length) return <div className="w-full text-center">No Todos</div>;

  return (
    <>
      {todos.map((todo) => (
        <Card className="w-auto" key={todo.id}>
          <div className="flex items-center justify-between px-4 pt-1">
            <span
              className={cn(
                'cursor-pointer rounded-full px-2 text-sm text-white',
                {
                  'bg-green-600': todo.status === 'NEW',
                },
                {
                  'bg-yellow-600': todo.status === 'IN_PROGRESS',
                },
                {
                  'cursor-default bg-blue-600': todo.status === 'COMPLETED',
                },
              )}
            >
              {todo.status}
            </span>
            <Trash
              className="h-5 w-5 cursor-pointer hover:text-red-400"
              onClick={() => deleteHandler(todo.id)}
            />
          </div>
          <CardHeader className="p-4">
            <CardTitle>{todo.title}</CardTitle>
            <CardDescription>{todo.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </>
  );
};

export default Todo;
