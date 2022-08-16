import React from "react";
import { Caret } from "../../assets/img";
import { DashboardHeader, Separator, Text, MiniSearch } from "../../Components";
import ArrowCount from "./components/arrow-count";
import Counts from "./components/counts";
import Progress from "./components/progress";
import "./styles.scss";

const TaskAnalysis = () => {
  return (
    <div>
      <DashboardHeader />
      <Separator width={0} height="32px" />
      <div className="task-analysis-top">
        <Text fontWeight={700} fontSize="24px" color="#003049">
          Task Analysis
        </Text>
        <MiniSearch title="Sub-District" />
      </div>
      <div className="task-analysis-wrapper">
        <div className="task-analysis-content-top">
          <Text fontSize="18px" fontWeight={600} color="#23262F">
            Task Analysis for the month of September, 2022
          </Text>
          <div className="task-analysis-content-top-date">
            <Text
              fontSize="12px"
              fontWeight={500}
              color="#003049"
              margin="0 13px 0 0"
            >
              Select month:
            </Text>
            <div className="task-analysis-content-top-date-item">
              <Text fontWeight={500} fontSize="12px" color="#003049">
                September, 2022
              </Text>
              <Caret />
            </div>
          </div>
        </div>
        <div className="task-analysis-content-main">
          <div>
            <div className="task-analysis-content-main__wrapper">
              <Text fontWeight={700} fontSize="16px" color="#4F4F4F">
                No of Registered Staffs
              </Text>

              <Separator width={0} height="15px" />
              <div className="task-analysis-content-main__content">
                <Counts />
                <ArrowCount />
                <Counts />
                <ArrowCount up={false} />
              </div>
            </div>
            <Separator width={0} height="17px" />

            <div className="task-analysis-content-main__wrapper">
              <Text fontWeight={700} fontSize="16px" color="#4F4F4F">
                Analysis of Survey Task
              </Text>

              <Separator width={0} height="15px" />
              <div className="task-analysis-content-main__content">
                <Counts />
                <ArrowCount />
                <Counts />
                <ArrowCount up={false} />
                <Counts />
                <ArrowCount />
              </div>
            </div>
          </div>

          <div>
            <div className="task-analysis-content-main__wrapper">
              <Text fontWeight={700} fontSize="16px" color="#4F4F4F">
                Sub-District Task Completion Statistics
              </Text>
              <Separator width={0} height="20px" />
              <div className="task-analysis-content-main__content">
                <Progress />
                <Progress />
                <Progress />
                <Progress />
                <Progress />
                <Progress />
              </div>
            </div>
            <Separator width={0} height="12px" />

            <div className="task-analysis-content-main__wrapper">
              <Text fontWeight={700} fontSize="16px" color="#4F4F4F">
                Staff Analysis of Posts and Surveys Tasks
              </Text>

              <Separator width={0} height="35px" />

              <div>
                <div className="fill-box">
                  <div
                    style={{ background: "#e786d7" }}
                    className="fill-box_content"
                  />
                  <Text>Surveys</Text>
                </div>
                <Separator width={0} height="11px" />
                <div className="fill-box">
                  <div
                    style={{ background: "#7F7FD5" }}
                    className="fill-box_content"
                  />
                  <Text>Postss</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text
          fontWeight={600}
          fontSize="18px"
          color="#23262F"
          margin="0 0 10px 18px"
        >
          Task Analysis for Twitter, Facebook and Instagram Posts
        </Text>
        <div className="task-analysis-content-bottom">
          <div className="task-analysis-content-bottom-top">
            <Text
              fontWeight={700}
              fontSize="20px"
              color="#4F4F4F"
              margin="0 53px 0 0 "
            >
              Audience reach
            </Text>
            <div className="task-analysis-content-bottom-top__date">
              <Text fontWeight={500} fontSize="12px" color="#4F4F4F">
                01/09/2022 – 30/09/2022
              </Text>
              <Caret />
            </div>
            <Separator height={0} width="29px" />
            <div className="check">
              <div
                style={{ border: "1.5px solid #7F7FD5" }}
                className="check__item"
              />
              <Text fontWeight={600} fontSize="12px" color="#4F4F4F">
                Total Posts
              </Text>
            </div>
            <Separator height={0} width="13px" />

            <div className="check">
              <div
                style={{ border: "1.5px solid #E786D7" }}
                className="check__item"
              />
              <Text fontWeight={600} fontSize="12px" color="#4F4F4F">
                No of Audience Reached (X 1000)
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskAnalysis;
