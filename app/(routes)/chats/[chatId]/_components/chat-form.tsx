"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  message: z.string().trim().min(1),
});

export const ChatForm = ({ conversationId }: { conversationId?: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await axios.post("/api/create", {
      message: values.message,
    });
    console.log(response);
  };

  return (
    <Form {...form}>
      <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full">
        <HiPhoto size={30} className="text-sky-500" />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center gap-2 lg:gap-4 w-full"
        >
          <div className="relative w-full">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Write a message"
                      {...field}
                      className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition"
            size="icon"
          >
            <HiPaperAirplane size={18} className="text-white" />
          </Button>
        </form>
      </div>
    </Form>
  );
};
