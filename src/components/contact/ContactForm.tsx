import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  console.log("Rendering ContactForm component");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
<h2 className="heading-secondary text-lg font-serif mb-4 text-white flex flex-col items-center">SEND A MESSAGE</h2> {/* Tamaño reducido */}
<div className="flex justify-center mb-12">
        <img
          src="/Img/divisor.png"
          alt="Divisor decorativo"
          className="h-8"
          loading="lazy"
        />
      </div>      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Name" 
                    {...field}
                    className="bg-[#002855] border border-white rounded-md px-4 h-12 w-full max-w-xl text-white placeholder:text-white/60 focus-visible:ring-2 focus-visible:ring-white" // Aumentar ancho
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Email" 
                    type="email"
                    {...field}
                    className="bg-[#002855] border border-white rounded-md px-4 h-12 w-full max-w-xl text-white placeholder:text-white/60 focus-visible:ring-2 focus-visible:ring-white" // Aumentar ancho
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Number" 
                    type="tel"
                    {...field}
                    className="bg-[#002855] border border-white rounded-md px-4 h-12 w-full max-w-xl text-white placeholder:text-white/60 focus-visible:ring-2 focus-visible:ring-white" // Aumentar ancho
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea 
                    placeholder="Message" 
                    {...field}
                    className="bg-[#002855] border border-white rounded-md px-4 min-h-[120px] w-full max-w-xl text-white placeholder:text-white/60 focus-visible:ring-2 focus-visible:ring-white resize-none" // Aumentar ancho
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<Button 
  type="submit"
  style={{
    backgroundImage: 'url("/Img/plateado.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  className="text-[#001233] rounded-md px-8 py-3 text-sm"
>
  SEND MESSAGE
</Button>

        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
