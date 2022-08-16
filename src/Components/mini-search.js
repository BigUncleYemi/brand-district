import React from "react";

import { MiniSearchIcon } from "../assets/img";

import "./styles.scss";

const MiniSearch = ({ title }) => {
  return (
    <div className="mini-search">
      <p className="mini-search__title">{title || "title"}: </p>
      <div className="mini-search__main">
        <input /> <MiniSearchIcon />
      </div>
    </div>
  );
};

export default MiniSearch;
