import React from "react";
import { Separator, Text, MiniSearch } from "../../../Components";
import AdvocateCardItem from "./advocate-card-item";

const NewAdvocates = () => {
  return (
    <div className="advocates">
      <div className="advocates__top">
        <div className="advocates__top__flex">
          <Text fontWeight={700} fontSize="24px" color="#003049">
            New Advocates
          </Text>
          <Text
            fontWeight={500}
            fontSize="16px"
            color="#117C1A"
            margin="0 0 0 17px"
          >
            View all
          </Text>
        </div>
        <MiniSearch title="Sub-District" />
      </div>
      <Separator width={0} height="24px" />
      <div className="advocates__items_wrapper">
        <AdvocateCardItem open={true} />
        <AdvocateCardItem />
        <AdvocateCardItem />
        <AdvocateCardItem />
        <AdvocateCardItem />
      </div>
    </div>
  );
};

export default NewAdvocates;
