import { Space, Button } from "antd";
import { Link } from "react-router-dom";

import FormSignIn from "./components/form-sign-in";

import { FBIcon, IconsGoogle, IGIcon, Twitter } from "../../../assets/img";

const SignIn = () => {
  return (
    <Space direction="vertical" align="center">
      <div
        style={{
          justifyContent: "space-between",
          width: "100%",
          display: "flex",
        }}
      >
        <Link to="/">Sign Up</Link>
        <a href="https://playstore.com" target="_bblank">
          Download App
        </a>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <h2>Welcome!</h2>
        <p>Sign In to continue</p>
      </div>
      <FormSignIn />
      <div id="social-auth">
        <Button type="primary" block icon={<IconsGoogle />} size="large">
          Continue with Google
        </Button>
        <p style={{ fontWeight: "bold" }}>OR</p>
        <p>Sign In with any of your social media account</p>
        <div id="social-icons">
          <Button
            type="primary"
            shape="circle"
            icon={<FBIcon />}
            size="large"
          />
          <Button
            type="primary"
            shape="circle"
            icon={<IGIcon />}
            size="large"
          />
          <Button
            type="primary"
            shape="circle"
            icon={<Twitter />}
            size="large"
          />
        </div>
        <p>
          Don’t have an account? <Link to="/">Sign Up</Link>
        </p>
      </div>
    </Space>
  );
};

export default SignIn;
