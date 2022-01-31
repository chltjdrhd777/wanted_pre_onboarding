import React, { useState } from "react";
import styled from "styled-components";

function Search() {
  const [inputValue, setInputValue] = useState("");

  function onHanldeSearchSubmit(e) {
    e.preventDefault();

    if (inputValue) {
      console.log("work");
      setInputValue("");
    }
  }

  function onHandleInput(e) {
    setInputValue(e.target.value);
  }

  return (
    <SearchForm onSubmit={onHanldeSearchSubmit} className="flex-center">
      <div className="input-container flex-center">
        <input type="text" maxLength={50} value={inputValue} onChange={onHandleInput} />

        <div className="search-icon flex-center">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </SearchForm>
  );
}

const SearchForm = styled.form`
  width: 60%;
  height: 100%;

  .input-container {
    width: 100%;
    height: 70%;
    border: 1px solid gray;
    border-radius: 2rem;
    padding: 1rem 2rem;

    & input {
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.fontColor};
    }
  }
`;

export default Search;
