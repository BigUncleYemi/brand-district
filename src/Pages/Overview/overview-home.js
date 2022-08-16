import React from "react";

import BackgroundImage from "../../assets/img/trending-bg.png";
import { OverviewHero, SocialIcon } from "../../assets/img";

import { DashboardHeader, Separator, Text } from "../../Components";

import Books from "./components/books";
import Advocates from "./components/advocates";

import "./styles.scss";

const Overview = () => {
  return (
    <div>
      <DashboardHeader />
      <Separator width="0" height="30px" />
      <Text fontWeight={700} fontSize="24px" color="#003049">
        Dashboard
      </Text>
      <Separator width="0" height="14px" />
      <div
        className="background"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="background__left">
          <Text fontWeight={700} fontSize="30px" color="#FFFFFF">
            TRENDING TASKS
          </Text>
          <Text
            fontWeight={700}
            fontSize="30px"
            color="#FFFFFF"
            margin="0 0 16px 0"
          >
            THIS MONTH
          </Text>
          <Text
            fontWeight={400}
            fontSize="18px"
            color="#FCFCFC"
            margin="0 0 30px 0"
          >
            Check out the trending tasks this month{" "}
          </Text>

          <div className="background__more">VIEW NOW</div>
        </div>

        <div className="background__right">
          <OverviewHero />
          <SocialIcon />
        </div>
      </div>
      <Separator width={0} height="20px" />

      {/* BOOKS */}

      <Books />
      <Separator width={0} height="30px" />

      {/* ADVOCATES */}
      <Advocates />
    </div>
  );
};

export default Overview;
