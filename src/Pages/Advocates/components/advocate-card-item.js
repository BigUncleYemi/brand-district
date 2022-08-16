import React from "react";
import { Separator, Text } from "../../../Components";
import { Check, Trash } from "../../../assets/img";

const AdvocateCardItem = ({ open }) => {
  return (
    <div className="advocate-card-item">
      <div className="advocate-card-item__dots">
        <div /> <div /> <div />
      </div>
      <div className="advocate-card-item__image" />
      <div className="advocate-card-item__text">
        <Text fontWeight={600} fontSize="16px" color="#003049">
          Ellie Joanne
        </Text>
        <Text fontWeight={500} fontSize="12px" color="#8097A4">
          10 mins ago
        </Text>
      </div>
      {open ? (
        <div className="advocate-card-item__menu">
          <div className="advocate-card-item__menu__dots">
            <div /> <div /> <div />
          </div>
          <Separator width={0} height="19px" />
          <div className="advocate-card-item__menu__item__wrapper">
            <div className="advocate-card-item__menu__item">
              <Text color="#117C1A" fontSize="9px" fontWeight={700}>
                Accept Request
              </Text>
              <Check />
            </div>
            <div className="advocate-card-item__menu__item">
              <Text color="#C5292A" fontSize="9px" fontWeight={700}>
                Decline Request
              </Text>
              <Trash />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AdvocateCardItem;
