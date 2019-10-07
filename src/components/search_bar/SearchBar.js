import React, { useState } from "react";
import "./searchbar.styles.css";

const SearchBar = ({ placeholder, onChange }) => {
  //   const [text, setText] = useState("");

  //   const onChange = e => {
  //     setText(e.target.value);

  //   };

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
