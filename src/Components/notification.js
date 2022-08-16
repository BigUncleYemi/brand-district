import React from "react";
import { NotificationIcon } from "../assets/img";

import "./styles.scss";

const Notification = () => {
  return (
    <div className="notification">
      <span>1 Unread message</span>
      <div>
        <NotificationIcon />
      </div>
    </div>
  );
};

export default Notification;
