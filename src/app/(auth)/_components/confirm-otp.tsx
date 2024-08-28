"use client";
import React, { useState } from "react";
import { ConfirmationResult } from "firebase/auth";
import { Button } from "@/components/button/button";

interface ConfirmOTPProps {
  confirmationResult: ConfirmationResult;
  onConfirm: () => void;
}

const ConfirmOTP = ({ confirmationResult, onConfirm }: ConfirmOTPProps) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");

  const validateOtp = () => {
    if (verificationCode.length !== 6) {
      setError("Invalid OTP. Please enter a 6 digit OTP.");
      return false;
    }
    setError("");
    return true;
  };

  const handleOtpSubmit = async () => {
    if (!validateOtp()) {
      return;
    }

    if (confirmationResult) {
      try {
        await confirmationResult.confirm(verificationCode);
        onConfirm();
      } catch (error: any) {
        setError("OTP code you entered is invalid.");
      }
    }
  };

  return (
    <>
      <div>
        <label htmlFor="otp" className="mb-2 block text-sm font-semibold">
          OTP
        </label>
        <input
          type="text"
          id="otp"
          name="otp"
          placeholder="Enter the OTP"
          className="mb-2 w-full rounded-lg border p-3"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          required
        />
      </div>
      {error && <p className="mb-6 text-red-500">{error}</p>}
      <Button type="submit" onClick={handleOtpSubmit} className="w-full">
        Verify OTP
      </Button>
    </>
  );
};

export default ConfirmOTP;
