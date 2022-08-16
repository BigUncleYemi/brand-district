import React from "react";
import { Text } from "../../Components";

import "./styles.scss";

const NoticationItem = () => {
  return (
    <div className="notification-item">
      <div className="notification-item__image" />
      <div>
        <Text
          fontWeight={500}
          fontSize="12px"
          color="#23262F"
          margin="0 0 2px 0"
        >
          Jenny rejected Microsoft’s Invite
        </Text>
        <Text fontWeight={400} fontSize="10px" color="#708099">
          04 April, 2021 | 04:00 PM
        </Text>
      </div>
    </div>
  );
};

export default NoticationItem;
