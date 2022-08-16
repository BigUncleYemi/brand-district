import React from "react";
import { Text } from "../../../Components";

import "../styles.scss";

const BookItem = ({ imageUrl, title, reposts }) => {
  return (
    <div className="book-item__body">
      <div
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
        className="book-item__image"
      />

      <Text color="#003049" fontWeight={600} fontSize="16px" margin="5px 0 0 0">
        {title}
      </Text>
      <Text color="#8097A4" fontSize="14px" fontWeight={400}>
        {reposts}
      </Text>
    </div>
  );
};

export default BookItem;
