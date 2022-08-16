import { Space } from "antd";

import FormForgetPassCode from "./components/form-forget-passcode";

function ForgetPasscode() {
  return (
    <Space direction="vertical" align="center">
      <div style={{ marginTop: "2rem" }}>
        <h2>Forgot Passcode</h2>
        <br />
        <p>
          Don’t worry.
          <br /> Enter your email address and we’ll send you a link to reset
          your password.
        </p>
      </div>
      <FormForgetPassCode />
    </Space>
  );
}

export default ForgetPasscode;
