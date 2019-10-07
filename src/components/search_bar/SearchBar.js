import React from "react";
import "./searchbar.styles.css";

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <div>
      <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
