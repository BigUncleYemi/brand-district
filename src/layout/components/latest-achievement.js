import React from "react";
import { Text, Separator } from "../../Components";
import AchieveentCard from "./achieveent-card";
import NoticationItem from "./notication-item";
import "./styles.scss";

const LatestAchievement = () => {
  return (
    <div className="latest-achieveents">
      <Text
        color="#23262F"
        fontWeight={700}
        fontSize="18px"
        margin="0 0 18px 0"
      >
        Latest Achievements
      </Text>
      <div className="achievement-card__wrapper">
        <AchieveentCard />
        <AchieveentCard />
        <AchieveentCard />
      </div>
      <Separator width={0} height="44px" />
      <div className="notification-title">
        <Text
          color="#23262F"
          fontWeight={700}
          fontSize="18px"
          margin="0 0 18px 0"
        >
          Notifications
        </Text>
        <Text fontWeight={600} fontSize="14px" color="#117C1A">
          View All
        </Text>
      </div>
      <Separator width={0} height="21px" />
      <div className="notification-item__wrapper">
        <NoticationItem />
        <NoticationItem />
        <NoticationItem />
      </div>
    </div>
  );
};

export default LatestAchievement;
