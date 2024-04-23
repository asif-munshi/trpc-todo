"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { trpc } from "@/app/_trpc/client";
import { TodoValidator, TTodoValidator } from "@/lib/todo-validator";

const AddTodoForm = () => {
  const utils = trpc.useUtils();

  const form = useForm<TTodoValidator>({
    resolver: zodResolver(TodoValidator),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { mutate: addTodo } = trpc.todo.add.useMutation({
    onSuccess: () => {
      //toast.success('Signed in successfully');
      utils.todo.getAll.invalidate();
    },
    onError: (err) => {
      if (err.data?.code === "UNAUTHORIZED") {
        //toast.error('Invalid email or password');
        console.error("Invalid email or password");
      }
    },
  });

  function onSubmit(values: TTodoValidator) {
    addTodo(values);
    form.reset({
      title: "",
      description: "",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Why react sucks?"
                  className="drop-shadow-sm focus-visible:ring-offset-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Because it sucks?"
                  className="resize-none drop-shadow-sm focus-visible:ring-offset-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" className="rounded-full text-white">
            Add Todo
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddTodoForm;
