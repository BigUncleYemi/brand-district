import React from "react";

import Search from "./search";
import Notification from "./notification";

import "./styles.scss";

const DashboardHeader = () => {
  return (
    <div className="main_header">
      <Search /> <Notification />
    </div>
  );
};

export default DashboardHeader;
