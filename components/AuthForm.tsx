"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-in" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  // 1. Define your form.
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // finally we write the submit handler
    try {
      if (type === "sign-in") {
        console.log("SIGN-IN", values);
      } else {
        console.log("SIGN-UP", values);
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    }
  }

  const isSignin = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">HireOn</h2>
        </div>
        <h2>Practice AI generated Job Interviews</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {!isSignin && <p>Name</p>}
            <p>Email</p>
            <p>Password</p>
            <Button
              className="!w-full !bg-primary-200 !text-dark-100 hover:!bg-primary-200/80 !rounded-full !min-h-10 !font-bold !px-5 cursor-pointer"
              type="submit"
            >
              {isSignin ? "Sign-In" : "Create an Account"}
            </Button>
          </form>
        </Form>
        <p className="text-center">
          {isSignin ? "Don't have an account?" : " Have an accoount already?"}
          <Link
            href={isSignin ? "/sign-up" : "/sign-in"}
            className="text-user-primary font-bold"
          >
            {isSignin ? " Sign In" : " Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
