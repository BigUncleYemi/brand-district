import React from "react";
import { Text } from "../../Components";
import "./styles.scss";

const PreviousPostItem = ({ imageUrl, title, reposts, duration }) => {
  return (
    <div className="previous-post-item">
      <div
        className="previous-post-item__image"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="previous-post-item__text">
        <Text fontWeight={700} fontSize="16px" color="#333333">
          {title}
        </Text>
        <Text
          fontWeight={400}
          fontSize="14px"
          color="#8A97A4"
          margin="3px 0 0 0"
        >
          {reposts}
        </Text>
      </div>
      <Text
        fontWeight={400}
        fontSize="14px"
        color="#8998A9"
        margin="0 0 0 auto"
      >
        {duration}
      </Text>
    </div>
  );
};

export default PreviousPostItem;
