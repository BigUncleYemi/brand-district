import { useState } from "react";
import { Space } from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import LatestAchievement from "./components/latest-achievement";
import { Separator } from "../Components";

import {
  LogoIcon,
  HomeOutlined,
  Account,
  Task,
  Profile,
  Rewards,
  Wallet,
  LogOut,
  CreateTaskIcon,
} from "../assets/img";
import LogoButton from "../Components/logo-button";

const DashboardLayout = () => {
  const [sideTab, setSideTab] = useState("");
  const navigate = useNavigate();
  const ListItem = ({ link, Icon, text }) => (
    <div>
      <NavLink end to={link}>
        <div>{Icon}</div>
        <div>
          <p>{text}</p>
        </div>
      </NavLink>
    </div>
  );
  return (
    <div className="dashboard">
      <aside>
        <Space direction="vertical" align="center">
          <div id="bar-logo">
            <LogoIcon />
          </div>
          <div>
            <ListItem link="/app" Icon={<HomeOutlined />} text="Dashboard" />
            <ListItem
              link="/app/advocate"
              Icon={<Account />}
              text="Manage Advocates"
            />
            <ListItem
              link="/app/analysis"
              Icon={<Task />}
              text="Task Analysis"
            />
            <ListItem link="/app/profile" Icon={<Profile />} text="Profile" />
            <ListItem link="/app/rewards" Icon={<Rewards />} text="Rewards" />
            <ListItem link="/app/wallet" Icon={<Wallet />} text="Wallet" />
            <ListItem link="/app/logout" Icon={<LogOut />} text="Log out" />
          </div>

          <button
            style={{
              border: "none",
              background: "transparent",
              marginTop: "2rem",
              cursor: "pointer",
            }}
            onClick={() => navigate("/app/new-task")}
          >
            <Space direction="vertical" align="center">
              <CreateTaskIcon />
              <p>Create New Task</p>
            </Space>
          </button>
        </Space>
      </aside>
      <main>
        <section className="mainpiece main-content-section">
          <Outlet {...{ sideTab, setSideTab }} />
        </section>
        <section className="sidepiece">
          <LogoButton />
          <Separator width={0} height="30px" />
          <LatestAchievement />
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
