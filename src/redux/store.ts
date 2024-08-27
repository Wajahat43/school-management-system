import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { teacherApi } from "./teachers/service";

export const makeStore = () => {
    return configureStore({
        reducer: {
            [teacherApi.reducerPath]: teacherApi.reducer,
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware()
              .concat(teacherApi.middleware),
        devTools: process.env.NEXT_PUBLIC_ENVIRONMENT === "development",
      });
}



// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();