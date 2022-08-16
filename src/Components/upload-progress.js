import React from "react";
import Text from "./text";
import { File, Delete } from "../assets/img";
import "./styles.scss";

const UploadProgress = ({ number = 1 }) => {
  return (
    <div className="upload-progress">
      <Text color="#003049" fontWeight={500} fontSize="16px" margin="0 0 8px 0">
        Uploading
      </Text>
      <div className="upload-progress__item_wapper">
        {Array(number)
          .fill(null)
          .map((item) => (
            <div className="upload-progress__body">
              <File />
              <div className="upload-progress__right">
                <div className="upload-progress__right__top">
                  <Text
                    color="#001825"
                    fontWeight={500}
                    fontSize="12px"
                    margin="0 auto 0 0"
                  >
                    Microsoft.jpeg
                  </Text>
                  <Text
                    color="#8097A4"
                    fontWeight={400}
                    fontSize="12px"
                    margin="0 40px 0 0"
                  >
                    5.6 MB
                  </Text>
                  <Delete />
                </div>
                <div className="upload-progress__progress_body">
                  <div
                    style={{ width: "30%" }}
                    className="upload-progress__progress_bar"
                  />
                </div>
                <div className="upload-progress__right__bottom">
                  <Text fontWeight={400} fontSize="12px" color="#8097A4">
                    58% done
                  </Text>
                  <Text fontWeight={400} fontSize="12px" color="#8097A4">
                    100Kb/sec
                  </Text>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UploadProgress;
