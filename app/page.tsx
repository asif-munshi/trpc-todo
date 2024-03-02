import Todo from '@/components/todo/Todo';

const todos = [
  { id: 1, title: 'Todo Title 1', description: 'Todo Description 1' },
  { id: 2, title: 'Todo Title 2', description: 'Todo Description 2' },
];

export default async function HomePage() {
  return (
    <div className="grid h-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:mx-auto lg:max-w-screen-xl lg:grid-cols-3 xl:grid-cols-4 xl:px-0">
      <Todo todos={todos} />
    </div>
  );
}
