import React from "react";
import { Text } from "../../Components";
import "./styles.scss";

const PostThisWeek = () => {
  return (
    <div className="post-this-week__body">
      <div className="post-this-week__main">
        <Text
          fontWeight={600}
          fontSize="16px"
          color="#27A857"
          margin="0 0 13px 0"
        >
          Posts this week
        </Text>
        <div className="post-this-week__image_Wrapper">
          <div className="post-this-week__image" />
          <div className="post-this-week__image" />
        </div>
      </div>
    </div>
  );
};

export default PostThisWeek;
