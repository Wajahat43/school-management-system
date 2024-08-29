"use client";
import AuthForm from "@/app/(auth)/_components/auth-form";
import useAuth from "../_hooks/use-auth";
import { useSearchParams } from "next/navigation";

const Page = () => {
  useAuth();
  const params = useSearchParams();
  const redirect = params.get("redirect") ?? undefined;

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-500 dark:bg-neutral-900">
      <div className="flex w-full max-w-lg flex-col items-center">
        <AuthForm redirect={redirect} />
      </div>
    </div>
  );
};

export default Page;
