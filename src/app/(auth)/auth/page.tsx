"use client";
import AuthForm from "@/app/(auth)/_components/auth-form";
import useAuth from "../_hooks/use-auth";

const Page = () => {
  useAuth();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-500 dark:bg-neutral-900">
      <div className="flex w-full max-w-lg flex-col items-center">
        <AuthForm />
      </div>
    </div>
  );
};

export default Page;
