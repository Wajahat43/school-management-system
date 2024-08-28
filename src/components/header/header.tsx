"use client";
import { auth } from "@/app/(auth)/firebase/firebase";
import { useAppDispatch } from "@/redux/store";
import { setUser } from "@/redux/auth/auth-slice";

import { getCurrentUser } from "@/redux/auth/auth-slice";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import React from "react";
import useNavigateToHomePage from "@/utils/hooks/navigation/use-navigate-to-homepage";

const navLinks = [
  { title: "Teachers", path: "/teachers" },
  { title: "Students", path: "/students" },
  { title: "Subjects", path: "/subjects" },
  { title: "Grades", path: "/grades" },
];

function Header() {
  const dispatch = useAppDispatch();
  const isAuthenticated = !!useAppSelector(getCurrentUser);
  const navigateToHomePage = useNavigateToHomePage();
  const handlLogout = async () => {
    const result = await auth.signOut();
    console.log(result);
    dispatch(setUser(null));
    navigateToHomePage();
  };

  return (
    <header className="flex min-h-20 flex-col items-center justify-between gap-2 px-24 py-4 md:flex-row">
      <Link className="hover:scale-105" href="/">
        Home
      </Link>
      <nav className="flex flex-col justify-between gap-2 md:flex-row md:gap-10">
        {navLinks.map(({ title, path }) => (
          <Link key={title} className="hover:scale-105" href={path}>
            {title}
          </Link>
        ))}
        {isAuthenticated ? (
          <button className="p-0 hover:scale-105" onClick={handlLogout}>
            Sign Out
          </button>
        ) : (
          <Link className="hover:scale-105" href="/auth/">
            Sign in
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
