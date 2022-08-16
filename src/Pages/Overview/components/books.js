import React from "react";
import { Separator, Text, MiniSearch } from "../../../Components";
import "../styles.scss";

import BookItem from "./book-item";

const BookList = [
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    title: "Never eat alone",
    reposts: "15M+ reposts",
  },
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    title: "Never eat alone",
    reposts: "15M+ reposts",
  },
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    title: "Never eat alone",
    reposts: "15M+ reposts",
  },
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    title: "Never eat alone",
    reposts: "15M+ reposts",
  },
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    title: "Never eat alone",
    reposts: "15M+ reposts",
  },
];

const Books = () => {
  return (
    <div className="books">
      <div className="books__top">
        <div className="books__top__text">
          <Text color="#003049" fontSize="24px" fontWeight={700}>
            Popular
          </Text>
          <Text
            cursor="pointer"
            color="#117C1A"
            fontSize="16px"
            fontWeight={500}
          >
            View all
          </Text>
        </div>

        <MiniSearch title="Sub-District" />
      </div>
      <Separator width={0} height="16px" />

      {/* Book items */}
      <div className="books__wrapper">
        {BookList.map((book, index) => (
          <BookItem {...book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
