"use client";
import { useRouter } from "next/navigation";
import { HOME_PAGE_PATH } from "@/app/constants";

const useNavigateToHomePage = () => {
  const router = useRouter();

  return () => {
    router.push(HOME_PAGE_PATH);
  };
};

export default useNavigateToHomePage;
