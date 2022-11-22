import React from "react";
import { useNavigate } from "react-router-dom";

import searchIcon from "../assets/search.svg";

function Search({ search, handleSearch }) {
  const navigate = useNavigate();
  return (
    <div className="search-bar form-control me-2 d-flex">
      <input
        className="search-field border-0"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && navigate("/products")}
      />

      <img className="search-icon" src={searchIcon} alt="searchIcon" />
    </div>
  );
}

export default Search;
