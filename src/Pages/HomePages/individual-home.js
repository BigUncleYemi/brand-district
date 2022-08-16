import { Space } from "antd";
import { Link } from "react-router-dom";

import { BigDownload, PlayStoreAlt, AppStoreAlt } from "../../assets/img";

const IndividualHome = () => {
  return (
    <>
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
      </Space>
      <div className="individual">
        <h2>Will you like to register as an individual?</h2>
        <div>
          <BigDownload />
        </div>
        <p>Proceed to download our mobile app below</p>
        <div>
          <a href="https://google.com">
            <PlayStoreAlt />
          </a>
          <a href="https://appstore.com">
            <AppStoreAlt />
          </a>
        </div>
      </div>
    </>
  );
};

export default IndividualHome;
