import React from "react";
import { Text } from "../../../Components";

import "../styles.scss";

const Progress = () => {
  return (
    <div>
      <div className="progress__top">
        <Text fontWeight={500} fontSize="12px" color="#4F4F4F">
          Ikeja, NGA
        </Text>
        <Text fontWeight={500} fontSize="12px" color="#979797">
          94%
        </Text>
      </div>
      <div className="progress__body">
        <div style={{ width: "40%" }} className="progress__step" />
      </div>
    </div>
  );
};

export default Progress;
