import { Space, Button } from "antd";
import { Link } from "react-router-dom";
import { IconsGoogle, FBIcon, IGIcon, Twitter } from "../../assets/img";

import FormBrand from "./components/form-brand";

const BrandHome = () => {
  return (
    <Space direction="vertical" align="center">
      <div
        style={{
          justifyContent: "space-between",
          width: "100%",
          display: "flex",
        }}
      >
        <Link to="/signin">Sign In</Link>
        <a href="https://playstore.com" target="_bblank">
          Download
        </a>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <h2>Welcome!</h2>
        <p>Please provide following details for your new account</p>
      </div>
      <FormBrand />
      <div id="social-auth">
        <Button type="primary" block icon={<IconsGoogle />} size="large">
          Sign up with Google
        </Button>
        <p style={{ fontWeight: "bold" }}>OR</p>
        <p>Sign Up with any of your social media account</p>
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
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </Space>
  );
};

export default BrandHome;
