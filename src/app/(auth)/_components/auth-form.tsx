import PhoneAuth from "@/app/(auth)/_components/phone-auth";
import { ConfirmationResult } from "firebase/auth";
import ConfirmOTP from "./confirm-otp";
import useNavigateToHomePage from "@/utils/hooks/navigation/use-navigate-to-homepage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useNavigateToPage from "../_hooks/use-navigate-to-page";

interface AuthFormProps {
  redirect?: string;
}

function AuthForm({ redirect }: AuthFormProps) {
  const navigateToHomePage = useNavigateToHomePage();
  const navigateToPage = useNavigateToPage();
  const router = useRouter();
  const [authMode, setAuthMode] = useState<"signIn" | "signUp">("signIn");
  const [step, setStep] = useState("phone"); // 'phone' or 'otp'
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);

  const getPageTitle = () => {
    return authMode === "signIn" ? "Sign In" : "Sign Up";
  };

  const getPageDescription = () => {
    return authMode === "signIn"
      ? "Sign in to your account using your phone number"
      : "Create account using your phone number";
  };

  const onConfirm = () => {
    if (redirect) {
      console.log("redirecting to ", redirect);
      navigateToPage(redirect);
    } else {
      navigateToHomePage();
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-lg p-8 dark:bg-neutral-800">
      {step === "phone" ? (
        <>
          <h2 className="text-xl font-semibold">{getPageTitle()}</h2>
          <p className="mb-4 text-sm text-neutral-300">
            {getPageDescription()}
          </p>
          <PhoneAuth
            setConfirmationResult={setConfirmationResult}
            setStep={setStep}
          />
        </>
      ) : (
        !!confirmationResult && (
          <ConfirmOTP
            confirmationResult={confirmationResult}
            onConfirm={onConfirm}
          />
        )
      )}

      {authMode === "signIn" ? (
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <button
            className="text-blue-500"
            onClick={() => setAuthMode("signUp")}
          >
            Sign Up
          </button>
        </p>
      ) : (
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <button
            className="text-blue-500"
            onClick={() => setAuthMode("signIn")}
          >
            Sign In
          </button>
        </p>
      )}
    </div>
  );
}

export default AuthForm;
