"use client";

import classNames from "classnames";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";

export default function CodeInput({
  onOtpSet,
}: {
  onOtpSet: (code: string) => void;
}) {
  const otpSize = 6;

  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (otp.length === otpSize) {
      onOtpSet(otp);
    }
  }, [onOtpSet, otp]);

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={otpSize}
      renderSeparator={<span className="w-2"></span>}
      renderInput={(props) => <input {...props} />}
    />
  );
}
