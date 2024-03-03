'use client';

import { trpc } from '@/app/_trpc/client';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Todo = () => {
  const { data: todos, isLoading } = trpc.todo.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;

  if (!todos?.length) return <div className="w-full text-center">No Todos</div>;

  return (
    <>
      {todos.map((todo) => (
        <Card className="w-auto" key={todo.id}>
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
