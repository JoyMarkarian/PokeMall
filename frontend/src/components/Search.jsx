import React from "react";

import searchIcon from "../assets/search.svg";

function Search({ search, handleSearch, setPage }) {
  return (
    <div className="form-control me-2 d-flex">
      <input
        className="border-0"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
        onKeyDown={(event) =>
          event.key === "Enter" && setPage({ path: "Products", index: null })
        }
      />

      <img src={searchIcon} alt="searchIcon" />
    </div>
  );
}

export default Search;
