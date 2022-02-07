import React, { useState } from "react";
import styled from "styled-components";

function Tag() {
  const [tags, setTags] = useState([
    "tag1",
    "long tag tax",
    "tag2",
    "long long looooong text",
    "tag3",
  ]);
  const [inputValue, setInputValue] = useState("");

  function onHandleKeyDown(e) {
    if (e.key === "Enter" && inputValue) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  }

  function onHandleChange(e) {
    const lastLetter = e.target.value[e.target.value.length - 1];

    if (lastLetter === ",") {
      if (inputValue) {
        setTags([...tags, inputValue]);
        setInputValue("");
      } else if (!inputValue) {
        return;
      }
    } else {
      setInputValue(e.target.value);
    }
  }

  return (
    <TagBox>
      {tags?.map((each, i) => (
        <span
          key={each}
          onClick={() => {
            const filteredTags = tags.filter((_, tagIdx) => tagIdx !== i);
            setTags(filteredTags);
          }}
        >
          {each}
        </span>
      ))}
      <input
        placeholder="태그를 입력하세요"
        value={inputValue}
        onChange={onHandleChange}
        onBlur={() => {
          setInputValue("");
        }}
        onKeyDown={onHandleKeyDown}
      />
    </TagBox>
  );
}

const TagBox = styled.div`
  margin-top: 2rem;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;

  & span {
    display: inline-block;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.grayOne};
    color: ${({ theme }) => theme.colors.pointMint};
    padding: 1.5rem;
    border-radius: 2rem;
    width: fit-content;
    font-weight: 500;
    transition: all 0.2s ease-in 0s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.grayTwo};
    }
  }

  & input {
    border: none;

    &:focus::placeholder {
      color: gray;
    }
  }

  @media screen and (max-width: 1000px) {
    & span {
      font-size: 1.2rem;
    }
  }
`;

export default Tag;
