import React from "react";
import { Separator, Text } from "../../Components";
import PreviousPostItem from "./previous-post-item";
import PostThisWeek from "./post-this-week";

import "./styles.scss";

const goals = [
  {
    text: "Target points for This Month",
    value: "90,000",
  },
  {
    text: "Shared points for This Month",
    value: "30,000",
  },
  {
    text: "Available points",
    value: "60,000",
  },
];

const previosPosts = [
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    title: "Fault In Our Stars",
    reposts: "18M+ reposts",
    duration: "27:03:22",
  },
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    title: "Fault In Our Stars",
    reposts: "18M+ reposts",
    duration: "27:03:22",
  },
  {
    imageUrl:
      "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
    title: "Fault In Our Stars",
    reposts: "18M+ reposts",
    duration: "27:03:22",
  },
];

const TargetGoals = () => {
  return (
    <div>
      <Text
        color="#333333"
        fontSize="22px"
        fontWeight={700}
        margin="0 0 13px 0"
      >
        Target Goals
      </Text>
      <div className="target-goals">
        {goals.map((goal, index) => (
          <div>
            <Text fontSize="14px" fontWeight={500} color="#8097A4">
              {goal.text}
            </Text>
            <Text fontSize="32px" fontWeight={700} color="#003049">
              {goal.value}
            </Text>
          </div>
        ))}
      </div>

      <Text color="#333333" fontSize="22px" fontWeight={700} margin="0 0 7px 0">
        Previous Posts
      </Text>
      <div className="previous-post-item__wrapper">
        {previosPosts.map((post, index) => (
          <PreviousPostItem {...post} />
        ))}
      </div>
      <Separator width={0} height="33px" />
      <Text
        color="#333333"
        fontSize="22px"
        fontWeight={700}
        margin="0 0 13px 0"
      >
        Weekly Posts
      </Text>
      <PostThisWeek />
    </div>
  );
};

export default TargetGoals;
