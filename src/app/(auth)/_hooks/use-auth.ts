"use client";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "@/app/(auth)/firebase/firebase";
import { useAppDispatch } from "@/redux/store";
import { setUser } from "@/redux/auth/auth-slice";
import { serializeUser } from "../_utils/helpers";

const useAuth = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const serializedUser = serializeUser(user);
        dispatch(setUser(serializedUser));
      } else {
        dispatch(setUser(null));
      }
    });
    return unsubscribe;
  });
};

export default useAuth;
