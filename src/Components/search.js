import React from "react";
import { SearchIcon } from "../assets/img";

import "./styles.scss";

const Search = () => {
  return (
    <div className="search__body">
      <input type="text" placeholder="Search" />
      <div className="search__icon_wrapper">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
