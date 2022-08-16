import React from "react";
import { Separator, Text } from "../../../Components";
import { CountArrowDown, CountArrowUp } from "../../../assets/img";

const ArrowCount = ({ up = true }) => {
  return (
    <div>
      <Text fontWeight={500} fontSize="10px" margin="0 0 12px 0">
        % increase from previous month
      </Text>
      <div>
        <div className="arrow-count__body">
          <Separator width={0} height={0} />
          <Text fontSize="20px" fontWeight={500} color="#979797">
            +1%
          </Text>
          {up ? <CountArrowUp /> : <CountArrowDown />}
        </div>
      </div>
    </div>
  );
};

export default ArrowCount;
