import React from "react";
import { Text } from "../../../Components";
import "../styles.scss";

const AdvocateItem = ({ imageUrl, name, points }) => {
  return (
    <div className="advocate-item">
      <div className="advocate-item__main">
        <div
          style={{ backgroundImage: `url('${imageUrl}')` }}
          className="advocate-item__image"
        />
      </div>
      <Text
        color="#003049"
        fontSize="16px"
        fontWeight={600}
        margin="10px 0 0 0"
      >
        {name}
      </Text>
      <Text color="#8097A4" fontSize="14px" fontWeight={400}>
        {points}
      </Text>
    </div>
  );
};

export default AdvocateItem;
