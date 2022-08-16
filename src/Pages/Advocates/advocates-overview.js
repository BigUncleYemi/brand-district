import React from "react";
import ManageAdvocate from "./components/manage-advocate";
import NewAdvocates from "./components/new-advocates";

import "./styles.scss";

import { DashboardHeader, Separator } from "../../Components";

const AdvocatesOverview = () => {
  return (
    <div>
      <DashboardHeader />
      <Separator width={0} height="30px" />
      <ManageAdvocate />
      <Separator width={0} height="12px" />
      <NewAdvocates />
    </div>
  );
};

export default AdvocatesOverview;
