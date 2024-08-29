"use client";
import { useRouter } from "next/navigation";
import { AUTH_PAGE_PATH } from "../_utils/constants";

const useNavigateToAuthPage = () => {
  const router = useRouter();

  return (redirectPath: string) => {
    const path =
      AUTH_PAGE_PATH + (redirectPath ? `?redirect=${redirectPath}` : "");
    router.push(path);
  };
};

export default useNavigateToAuthPage;
