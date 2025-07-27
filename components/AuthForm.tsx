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
import FormField from "./FormField";
import { useRouter } from "next/navigation";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  // getting access to the router so we can redirtect the user to the main page after a successful login
  const router = useRouter();
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
        toast.success("SignIn successful.");
        router.push("/");
        console.log("SIGN-IN SUCCESSFUL", values);
      } else if (type === "sign-up") {
        toast.success("Account created successfully. Please sign in.");
        router.push("/sign-in");
        console.log("SIGN-UP SUCCESSFUL", values);
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
            {!isSignin && (
              <FormField
                name="name"
                control={form.control}
                label="Name"
                placeholder="Your Name"
                type="text"
              />
            )}
            <FormField
              name="email"
              control={form.control}
              label="Email"
              placeholder="Email"
              type="email"
            />
            <FormField
              name="password"
              control={form.control}
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
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
