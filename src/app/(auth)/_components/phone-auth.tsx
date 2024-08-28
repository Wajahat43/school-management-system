"use client";
import React, { useEffect } from "react";
import { ConfirmationResult } from "firebase/auth";
import { Button } from "@/components/button/button";
import {
  auth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "@/app/(auth)/firebase/firebase";

interface PhoneAuthProps {
  setConfirmationResult: (result: ConfirmationResult) => void;
  setStep: (step: "phone" | "otp") => void;
}

const PhoneAuth = ({ setConfirmationResult, setStep }: PhoneAuthProps) => {
  const [error, setError] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("+92");
  const [sendingOtp, setSendingOtp] = React.useState(false);
  const sendOtpButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const [appVerifier, setAppVerifier] =
    React.useState<RecaptchaVerifier | null>(null);

  useEffect(() => {
    if (!sendOtpButtonRef.current || appVerifier) {
      return;
    }

    setAppVerifier(
      new RecaptchaVerifier(auth, sendOtpButtonRef.current, {
        size: "invisible",
      }),
    );
  }, []);

  const onPhoneSubmit = async () => {
    if (!sendOtpButtonRef.current || !appVerifier) {
      return;
    }

    setSendingOtp(true);

    try {
      const result = await signInWithPhoneNumber(
        auth,
        countryCode + phoneNumber,
        appVerifier,
      );
      setConfirmationResult(result);
      setStep("otp");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setSendingOtp(false);
    }
  };
  return (
    <>
      <label
        htmlFor="countryCode"
        className="text-md font-medium text-neutral-300"
      >
        Select Country Code
      </label>
      <select
        id="countryCode"
        name="countryCode"
        className="mt-1 h-12 w-full rounded-md"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
      >
        <option value="+92">+92 (Pakistan) </option>
        <option value="+1">+1 (USA)</option>
        <option value="+44">+44 (UK)</option>
        <option value="+91">+91 (India)</option>
        <option value="+61">+61 (Australia)</option>
      </select>
      <input
        id="phone"
        name="phone"
        placeholder="Enter your phone number"
        className="mt-4 w-full rounded-lg border p-3"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      {error && <p className="text-red-500">{error}</p>}
      <Button
        ref={sendOtpButtonRef}
        onClick={onPhoneSubmit}
        className="mt-4 w-full"
        disabled={sendingOtp}
      >
        Send OTP
      </Button>
    </>
  );
};

export default PhoneAuth;
