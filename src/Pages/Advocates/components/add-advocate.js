import React from "react";
import { Back } from "../../../assets/img";
import {
  DocumentUpload,
  Separator,
  Text,
  UploadProgress,
} from "../../../Components";

import "../styles.scss";

const AddAdvocate = () => {
  return (
    <div>
      <div className="add-advocate-back">
        <Back />
        <Text color="#003049" fontWeight={700} fontSize="24px">
          Invite New Advocate
        </Text>
      </div>
      <Separator width={0} height="46px" />
      <div className="add-advocate-form">
        <div>
          <DocumentUpload />
          <Separator width={0} height="24px" />
          <div className="add-advocate-form__upload-button">Choose file</div>
        </div>
        <div>
          <UploadProgress number={3} />
        </div>
      </div>
    </div>
  );
};

export default AddAdvocate;
