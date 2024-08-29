"use client";
import { useRouter } from "next/navigation";

const useNavigateToPage = () => {
  const router = useRouter();

  return (redirectPath: string) => {
    router.push(redirectPath);
  };
};

export default useNavigateToPage;
