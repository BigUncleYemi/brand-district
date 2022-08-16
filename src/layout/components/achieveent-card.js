import React from "react";
import { Text } from "../../Components";

import "./styles.scss";

const AchieveentCard = () => {
  return (
    <div className="achievement-card">
      <Text fontWeight={700} fontSize="22px" color="#000000" margin="0 0 2px 0">
        Top 10
      </Text>
      <Text color="#000000" fontWeight={500} fontSize="14px" margin="0 0 3px 0">
        Staff Posts
      </Text>
      <Text color="#787486" fontWeight={500} fontSize="12px">
        20% Increase from Last Week
      </Text>
    </div>
  );
};

export default AchieveentCard;
