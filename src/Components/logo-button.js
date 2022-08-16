import React from "react";
import Text from "./text";
import { AddLogo } from "../assets/img";
import "./styles.scss";

const LogoButton = ({ logoImageUrl, name }) => {
  return (
    <div className="logo_button">
      <div
        style={{ backgroundImage: `url('${logoImageUrl}')` }}
        className="logo_button__img"
      />

      <Text
        color="#212121"
        fontWeight={600}
        fontSize="17px"
        margin="0 23px 0 0"
      >
        MICROSOFT
      </Text>
      <AddLogo style={{ cursor: "pointer" }} />
    </div>
  );
};

export default LogoButton;
