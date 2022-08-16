import React from "react";
import AddAdvocate from "./components/add-advocate";
import { DashboardHeader, Separator, Text, MiniSearch } from "../../Components";
import AdvocateCardItem from "./components/advocate-card-item";

import "./styles.scss";
import { Input } from "antd";

const NewAdvocate = () => {
  return (
    <div>
      <DashboardHeader />
      <Separator width={0} height="30px" />
      <AddAdvocate />
      <Separator width={0} height="16px" />
      <Text color="#003049" fontWeight={700} fontSize="24px">
        Create Advocate Link
      </Text>
      <Separator width={0} height="21px" />
      <Text fontSize="14px" fontWeight={400} color="#001825">
        Create a staff link below using your company’s name, copy the link and
        share with your staffs.
      </Text>
      <Separator width={0} height="21px" />
      <div className="create-advocate-link">
        <Input placeholder="Eg. https://BrandDistrict.com/Company Name-Staff Request" />{" "}
        <div className="create-advocate-link__button">Copy link</div>
      </div>
      <Separator width={0} height="23px" />
      <div className="advocate-request-list-top">
        <div className="advocate-request-list-title">
          <Text color="#003049" fontWeight={700} fontSize="24px">
            Advocate Requests
          </Text>
          <Text
            color="#117C1A"
            fontWeight={500}
            fontSize="16px"
            margin="0 0 0 23px"
          >
            View all
          </Text>
        </div>
        <MiniSearch title="Sub-District" />
      </div>
      <Separator width={0} height="24px" />

      <div className="advocate-request-list-wrapper">
        <AdvocateCardItem open={true} />
        <AdvocateCardItem />
        <AdvocateCardItem />
        <AdvocateCardItem />
        <AdvocateCardItem />
      </div>
    </div>
  );
};

export default NewAdvocate;
