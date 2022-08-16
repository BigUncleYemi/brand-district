import { Col, Row, Space } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { WhiteLogo, BigLogoIcon } from "../assets/img";

function VerificationLayout() {
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
                    <NavLink end to="/">
                      For Corporate Organizations
                    </NavLink>
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
            <section className="my-8">
              <BigLogoIcon />
            </section>
          </div>
        </Col>
        <Col className="right-side" span={9}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}

export default VerificationLayout;
