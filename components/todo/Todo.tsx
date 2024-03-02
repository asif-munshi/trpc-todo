import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Todo {
  id: number;
  title: string;
  description: string;
}

interface TodoProps {
  todos: Todo[];
}

const Todo: React.FC<TodoProps> = ({ todos }) => {
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
