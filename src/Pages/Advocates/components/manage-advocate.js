import React from "react";
import { Separator, Text, MiniSearch } from "../../../Components";
import {
  ArrowDown,
  AdvocateActivitiesChart,
  AdvocateStrengthChart,
} from "../../../assets/img";

const ManageAdvocate = () => {
  return (
    <div className="advocates">
      <div className="advocates__top">
        <Text fontWeight={700} fontSize="24px" color="#003049">
          Manage Advocates
        </Text>
        <MiniSearch title="Sub-District" />
      </div>
      <Separator width={0} height="17px" />
      <div className="advocates__manage">
        {/* advocate activities */}

        <div className="advocates__manage__content">
          <div className="advocates__manage__content__top">
            <Text color="#23262F" fontWeight={700} fontSize="18px">
              Advocate Activities
            </Text>
            <div className="advocates__manage__content__top__date">
              <Text fontSize="12px" fontWeight={600} color="#787486">
                Aug 25-Sept 25
              </Text>
              <ArrowDown />
            </div>
          </div>
          <Separator width={0} height="24px" />
          <div style={{ margin: "0 auto", width: "fit-content" }}>
            <AdvocateActivitiesChart />
          </div>
          <Separator width={0} height="42px" />
          <div className="advocates__activities_legend">
            <div className="advocates__activities_legend__item__wrapper">
              <div
                style={{ background: "#FABE7A" }}
                className="advocates__activities_legend__item"
              >
                a
              </div>
              <Text>Facebook Posts</Text>
            </div>
            <div className="advocates__activities_legend__item__wrapper">
              <div
                style={{ background: "#F6866A" }}
                className="advocates__activities_legend__item"
              >
                b
              </div>
              <Text>Twitter Posts</Text>
            </div>
            <div className="advocates__activities_legend__item__wrapper">
              <div
                style={{ background: "#59E6F6" }}
                className="advocates__activities_legend__item"
              >
                c
              </div>
              <Text>Instagram Posts</Text>
            </div>
          </div>
        </div>

        {/* Advocates strength */}

        <div className="advocates__manage__content">
          <div className="advocates__manage__content__top">
            <Text color="#23262F" fontWeight={700} fontSize="18px">
              Advocate Strength
            </Text>
            <div className="advocates__manage__content__top__date">
              <Text fontSize="12px" fontWeight={600} color="#787486">
                Aug 25-Sept 25
              </Text>
              <ArrowDown />
            </div>
          </div>
          <Separator width={0} height="24px" />
          <div className="advocates__strength">
            <div className="advocates__strength__legend">
              <div className="advocates__strength__legend__item">
                <div className="advocates__strength__legend__item__top">
                  <div
                    style={{ background: "#6956E5" }}
                    className="advocates__strength__legend__item__top__ball"
                  />
                  <Text fontWeight={400} fontSize="14px" color="#787486">
                    Inactive
                  </Text>
                </div>
                <Text fontWeight={700} fontSize="18px" color="#000000">
                  254
                </Text>
              </div>
              <div className="advocates__strength__legend__item">
                <div className="advocates__strength__legend__item__top">
                  <div
                    style={{ background: "#FB896B" }}
                    className="advocates__strength__legend__item__top__ball"
                  />
                  <Text fontWeight={400} fontSize="14px" color="#787486">
                    Active
                  </Text>
                </div>
                <Text fontWeight={700} fontSize="18px" color="#000000">
                  3000
                </Text>
              </div>
              <div className="advocates__strength__legend__item">
                <div className="advocates__strength__legend__item__top">
                  <div
                    style={{ background: "#F8C07F" }}
                    className="advocates__strength__legend__item__top__ball"
                  />
                  <Text fontWeight={400} fontSize="14px" color="#787486">
                    Inactive
                  </Text>
                </div>
                <Text fontWeight={700} fontSize="18px" color="#000000">
                  3254
                </Text>
              </div>
            </div>
            <div className="advocates__strength__cahrt_Wrapper">
              <AdvocateStrengthChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAdvocate;
