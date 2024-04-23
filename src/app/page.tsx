import Todo from "@/components/todo/todo";

export default function HomePage() {
  return (
    <div className="grid h-full max-w-[1485px] grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:mx-auto lg:grid-cols-3 2xl:grid-cols-4">
      <Todo />
    </div>
  );
}
