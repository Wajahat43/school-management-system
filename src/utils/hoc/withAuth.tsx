"use client";
import { FC, useEffect } from "react";

import { useAppSelector } from "@/redux/store";
import { getCurrentUser } from "@/redux/auth/auth-slice";
import useNavigateToAuthPage from "@/app/(auth)/_hooks/use-navigate-to-authpage";
import { usePathname } from "next/navigation";

const withAuth = (WrappedComponent: FC<any>): FC => {
  const Component = (props: any) => {
    const isAuthenticated = !!useAppSelector(getCurrentUser);
    const navigateToAuthPage = useNavigateToAuthPage();
    const redirectPath = usePathname();

    useEffect(() => {
      if (!isAuthenticated) {
        navigateToAuthPage(redirectPath);
      }
    }, [isAuthenticated]);

    if (!isAuthenticated) return null;
    return <WrappedComponent {...props} />;
  };
  Component.displayName = "withAuth";
  return Component;
};

export default withAuth;
