import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "redux/api/axios";
import debounce from "utils/helpers/debounce";
import { makeClassName } from "utils/helpers/makeClassName";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [filteredTags, setFilteredTags] = useState([]);
  const [cursorIdx, setCursorIdx] = useState(-2);
  const filterListRef = useRef(null);
  const location = useLocation();
  const { isLogin } = useSelector((state) => state.user);

  const { refetch } = useQuery(
    ["tag"],
    () => axios.get(`/tag/${inputValue.toLowerCase().trim() || "undefined"}`),
    {
      enabled: false,
      onSuccess: (data) => {
        setFilteredTags(data.data);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const inputdebounce = useCallback(debounce(refetch), []);

  //@useEffect
  useEffect(() => {
    function clickOutside(e) {
      if (filterListRef.current !== e.target) {
        setInputValue("");
        setFilteredTags([]);
      }
    }

    document.addEventListener("click", clickOutside);

    return () => document.removeEventListener("click", clickOutside);
  }, []);

  useEffect(() => {
    if (location.pathname !== location.state?.prevPath) {
      setInputValue("");
      setFilteredTags([]);
      setCursorIdx(-2);
    }
  }, [location.pathname]);

  useEffect(() => {
    setCursorIdx(-2);

    if (inputValue) {
      inputdebounce();
    } else {
      setFilteredTags([]);
    }
  }, [inputValue]);

  useEffect(() => {
    const list = [...filterListRef.current.children];

    list.forEach((e, i) => {
      e.classList.toggle("focused", i === cursorIdx);
    });
  }, [cursorIdx, inputValue]);

  //@handler
  function onHandleInput(e) {
    setInputValue(e.target.value);
  }

  function onHanldeSearchSubmit(e) {
    e.preventDefault();

    if (inputValue) {
      alert("구현 준비중입니다 ㅜㅜ");
      setInputValue("");
    }
  }

  function onHandleOnKeyDown(e) {
    const possibleKeys = ["ArrowUp", "ArrowDown"];

    if (!possibleKeys.includes(e.key)) {
      return;
    }

    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      if (cursorIdx === -2) {
        console.log(filteredTags.length);
        if (filteredTags.length === 1) {
          setCursorIdx(0);
        } else {
          setCursorIdx(cursorIdx + 1);
        }
      }

      if (e.key === "ArrowDown") {
        const nextCursorIdx = cursorIdx + 1;

        if (nextCursorIdx <= filteredTags.length - 1) {
          setCursorIdx(nextCursorIdx);
        }
      }

      if (e.key === "ArrowUp") {
        const nextCursorIdx = cursorIdx - 1;
        if (nextCursorIdx >= 0) {
          setCursorIdx(nextCursorIdx);
        }
      }
    }
  }

  return (
    <SearchFormMedia onSubmit={onHanldeSearchSubmit} className="flex-center-C">
      <div className="input-container flex-center">
        <input
          type="text"
          maxLength={50}
          value={inputValue}
          onChange={onHandleInput}
          placeholder={
            !isLogin ? "먼저 게스트나 일반 로그인을 해주세요!" : "가 ~ 라를 검색해보세요!"
          }
          // onBlur={() => {
          //   setInputValue("");
          //   setFilteredTags([]);
          // }}
          onKeyDown={onHandleOnKeyDown}
          disabled={!isLogin}
        />

        <div className="search-icon flex-center">
          <i className="fas fa-search"></i>
        </div>
      </div>

      <ul
        className={makeClassName(["filterlist", !filteredTags.length && "hidden"])}
        ref={filterListRef}
      >
        {filteredTags.map((e) => (
          <li key={e.tagName}>
            {e.tagName.split("").map((eachLetter, i) => (
              <span key={i} className={inputValue.includes(eachLetter) ? "highlight" : ""}>
                {eachLetter}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </SearchFormMedia>
  );
}

const S = {
  SearchForm: styled.form`
    width: 60%;
    height: 100%;
    position: relative;

    .input-container {
      width: 100%;
      height: 90%;
      border: 1px solid gray;
      border-radius: 2rem;
      padding: 1rem 2rem;

      & input {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.fontColor};
        font-size: 1.5rem;
      }
    }

    .filterlist {
      position: absolute;
      background-color: white;
      border: 1px solid gray;
      width: 100%;
      top: 3.5rem;

      border-radius: 5px;
      padding: 1.5rem;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      & li {
        cursor: pointer;
        width: fit-content;
        color: ${({ theme }) => theme.colors.blackZero};

        &:hover,
        &.focused {
          text-decoration: underline;
        }

        & span {
          color: ${({ theme }) => theme.colors.blackZero};
        }
        & span.highlight {
          color: ${({ theme }) => theme.colors.pointCarrot};
          font-weight: bold;
        }
      }

      &.hidden {
        display: none;
      }
    }
  `,
};

const SearchFormMedia = styled(S.SearchForm)`
  @media screen and (max-width: 1000px) {
    .filterlist {
      z-index: 0;
    }
  }
`;

export default Search;
