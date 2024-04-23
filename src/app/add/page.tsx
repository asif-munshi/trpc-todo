import type { Metadata } from "next";
import AddTodoForm from "@/components/forms/addTodoForm";

export const metadata: Metadata = {
  title: "Add - Todo",
  description: "Created by Asif Munshi",
};

export default function AddTodoPage() {
  return (
    <div className="flex h-full flex-col items-center gap-4 pt-4">
      <div className="w-full px-4 drop-shadow sm:max-w-screen-sm">
        <h2 className="mt-10 pb-4 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Add Todo
        </h2>
        <AddTodoForm />
      </div>
    </div>
  );
}
