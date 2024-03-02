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
        <div
          key={todo.id}
          className="w-full rounded-lg border p-2 drop-shadow-lg sm:max-w-screen-sm"
        >
          <div className="pb-2 text-lg font-semibold">{todo.title}</div>
          <div>{todo.description}</div>
        </div>
      ))}
    </>
  );
};

export default Todo;
