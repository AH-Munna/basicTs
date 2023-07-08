"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .max(16, { message: "Password cant be more than 16." })
    .min(8, { message: "Password must be at least 8 characters." })
    .optional(),
});
type formType = z.infer<typeof formSchema>;
export default function MainForm() {
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: formType) {
    fetch("/api/auth/login", { body: JSON.stringify(values), method: "POST" });
  }
  return (
    <>
      <div className="before:content-['hello'] after:content-['!']"> world</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormDescription>This is your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      <div className="flex justify-center items-center">
        <div
          className="relative flex justify-center items-center  w-32 h-10 text-[#00fa9a] hover:cursor-pointer
        before:absolute
        before:bg-red-500
        before:top-10
        before:left-[10%]
        hover:before:w-[70%]
        hover:before:h-[70%]
        before:shadow-[-60px_-55px_0_gray]
        before:rounded-full
        before:animate-myanimation
        after:animate-myanimation
        
        after:absolute
        after:bg-green-500
        after:bottom-10
        after:left-[30%]
        hover:after:w-[70%]
        hover:after:h-[70%]
        after:shadow-[60px_55px_0_cyan]
        after:rounded-full
        "
        >
          <span className="w-full h-full flex justify-center items-center z-10 font-bold  text-xl absolute rounded-full bg-white capitalize">
            click me
          </span>
        </div>
      </div>
    </>
  );
}
