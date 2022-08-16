import React from "react";
import { Separator, Text, MiniSearch } from "../../../Components";
import "../styles.scss";

import AdvocateItem from "./advocate-item";

const AdvocateList = [
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    name: "Never eat alone",
    points: "15M+ points",
  },
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    name: "Never eat alone",
    points: "15M+ points",
  },
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    name: "Never eat alone",
    points: "15M+ points",
  },
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    name: "Never eat alone",
    points: "15M+ points",
  },
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    name: "Never eat alone",
    points: "15M+ points",
  },
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    name: "Never eat alone",
    points: "15M+ points",
  },
];

const Advocates = () => {
  return (
    <div className="books">
      <div className="books__top">
        <div className="books__top__text">
          <Text color="#003049" fontSize="24px" fontWeight={700}>
            Top Advocates
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

      {/* Advocate items */}
      <div className="advocate-item__wrapper">
        {AdvocateList.map((advocate, index) => (
          <AdvocateItem {...advocate} />
        ))}
      </div>
    </div>
  );
};

export default Advocates;
