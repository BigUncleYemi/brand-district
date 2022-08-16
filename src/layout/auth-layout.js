import { Col, Row, Space } from "antd";
import { WhiteLogo, Google, Apple } from "../assets/img";
import { NavLink, Outlet } from "react-router-dom";

// function Layout() {
//   return (
//     <div className="">
//       dkdjk
//       <hr />
//       <Outlet />
//     </div>
//   );
// }

const AuthLayout = () => {
  return (
    <div className="auth">
      <Row>
        <Col className="left-side" span={15}>
          <div id="bg-overlay">
            <header>
              <nav>
                <Space>
                  <div className="logo">
                    <WhiteLogo />
                    <p>
                      <span>Brand</span>
                      <span>District</span>
                    </p>
                  </div>
                  <div>
                    <NavLink to="/">For Corporate Organizations</NavLink>
                  </div>
                  <div>
                    <NavLink to="/individual">For Individuals</NavLink>
                  </div>
                  <div>
                    <NavLink to="/brand">For Brands</NavLink>
                  </div>
                </Space>
              </nav>
            </header>
            <section>
              <h1>BrandDistrict</h1>
              <h2>Build valuable relationships with your audience</h2>
              <p>
                BrandDistrict is the smart online branding platforn that allows
                you to create a strong brand that will get and keep people’s
                attention. Branding has always been a vital part of business,
                hence your brand needs to go the extra mile of ensuring they
                stand out in a crowd.
              </p>
              <Space direction="vertical">
                <p id="que">Are you a Brand Advocate?</p>
                <Space>
                  <a href="https://google.com">
                    <Google />
                  </a>
                  &emsp;
                  <a href="https://appstore.com">
                    <Apple />
                  </a>
                </Space>
              </Space>
            </section>
          </div>
        </Col>
        <Col className="right-side" span={9}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
