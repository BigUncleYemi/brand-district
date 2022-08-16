import { message, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { OpenMail } from "../../../assets/img";

const VerificationHome = () => {
  const navigate = useNavigate();
  const handleSendOTP = () => {
    message.success("OTP code has been Sent");
    navigate("/verification/phone");
  };
  const handleResendLink = () => {
    message.success("Verification link has been resent");
  };
  return (
    <>
      <div className="verification">
        <h2>Verify Email Address</h2>
        <div>
          <OpenMail />
        </div>
        <div id="veri-sec">
          <p id="title">Your email is on the way</p>
          <p>
            Check your email at <span>inumidun123@gmail.com</span> and click on
            the link to verify your email.
          </p>
          <button id="reset" onClick={handleResendLink}>
            Resend Link
          </button>
          <h3>Didn’t get the link?</h3>
          <p style={{ fontWeight: "bold", fontSize: 16 }}>OR</p>
          <p>
            Receive a 4-digit OTP on the phone number provided during
            registration to verify your phone number.
          </p>
          <Button type="primary" block size="large" onClick={handleSendOTP}>
            Send OTP
          </Button>
        </div>
      </div>
    </>
  );
};

export default VerificationHome;
