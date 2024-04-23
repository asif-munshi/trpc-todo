import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="grid h-full max-w-[1485px] grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:mx-auto lg:grid-cols-3 2xl:grid-cols-4">
      <div className="font-mono text-2xl">Hello World!</div>
      <Button>Click me</Button>
    </div>
  );
}
