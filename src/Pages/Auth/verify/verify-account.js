import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, message } from "antd";
import FormOTPInput from "../../../Components/form-otp-input";

const VerificationAccount = () => {
  const [num, setNum] = React.useState();
  const navigate = useNavigate();
  const handleResendOTP = () => {
    message.success("OTP Code has been resent");
  };
  const handleSubmitCode = () => {
    message.success("Account Verified successfully");
    navigate("/app");
  };
  return (
    <>
      <div
        className="verification"
        style={{ justifyContent: "center", margin: "auto" }}
      >
        <h2>Verify Phone Number</h2>
        <br />
        <div id="veri-sec" style={{ width: "65%" }}>
          <p>
            We noticed that you are signing in on a new device. Kindly verify
            your identity by entering the 4-digit OTP sent to{" "}
            <span>+2341897654093</span>
          </p>
          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <FormOTPInput value={num} onChange={setNum} />
          </div>
          <Button type="primary" block size="large" onClick={handleSubmitCode}>
            Continue
          </Button>
          <br />
          <button id="reset" onClick={handleResendOTP}>
            Resend Code
          </button>
          <h3>Didn’t get the code?</h3>
        </div>
      </div>
    </>
  );
};

export default VerificationAccount;
