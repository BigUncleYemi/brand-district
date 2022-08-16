import React from "react";
import { Upload } from "../assets/img";
import Text from "./text";
import "./styles.scss";

const DocumentUpload = () => {
  return (
    <div className="document_upload">
      <Upload />
      <Text
        fontWeight={500}
        fontSize="16px"
        color="#55A0D2"
        margin="16px 0 11px 0"
      >
        Drag files to upload
      </Text>
      <Text fontWeight={500} fontSize="8px" color="#000000">
        (supports .png, .jpeg, .pdf, and .docx only)
      </Text>
    </div>
  );
};

export default DocumentUpload;
