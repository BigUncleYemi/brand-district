import React from "react";
import { Text } from "../../../Components";

import "../styles.scss";

const Counts = () => {
  return (
    <div className="counts">
      <Text fontWeight={500} fontSize="10px" color="#4F4F4F">
        No of Newly Joined Staffs
      </Text>
      <Text fontWeight={500} fontSize="18px" color="#4F4F4F">
        288 Staffs
      </Text>
    </div>
  );
};

export default Counts;
