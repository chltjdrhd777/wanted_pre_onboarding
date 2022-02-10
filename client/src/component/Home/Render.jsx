import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Tag from "component/Tag";
import axios from "redux/api/axios";

function Main({ objData, stringData }) {
  //@ click to edit sample
  const [editState, setEditState] = useState({ value: "최우철", editable: false });
  const editInputRef = useRef(null);

  useEffect(() => {
    if (editState.editable) {
      editInputRef.current.onblur = (e) => {
        setEditState({ value: e.target.value, editable: false });
      };
      editInputRef.current.focus();
    }
  }, [editState.editable]);

  //@ Tab sambple
  const [tab, setTab] = useState({
    currentIdx: 0,
    content: ["첫번째", "두번째", "세번째", "네번째"],
  });

  //@ auto complete sample
  const dataList = [
    "가람",
    "나리",
    "개호",
    "구리",
    "청동",
    "오드라",
    "이리 오너라",
    "abw21",
    "asfwa#3351",
    "ashe",
    "구미 삼동로 21-5",
    "구구단",
    "고성",
    "고루마",
    "고고이이",
    "고래",
    "고무",
    "가평24시간",
    "가지 치기",
    "기리 가리",
    "와이 키키",
    "수메르 단",
    "cat",
    "마마무",
    "교사",
    "규정",
    "구각",
    "기술",
    "계기",
    "기업",
    "그림",
    "게살",
    "기계",
    "갸뜩이나",
    "거위",
    "겨울",
  ];

  const filteredInputRef = useRef(null);

  const [autoCompleteInput, setAutoCompoleteInput] = useState("");

  const initialState = {
    focused: null,
    list: [],
  };

  const [filteredList, setFilteredList] = useState({
    focused: null,
    list: [],
  });

  function filteredListBlurListener(e) {
    const targetBoundary = e.target.closest(".auto-complete-text");

    if (!targetBoundary) {
      //@ 배치 업데이트를 통해 한번만 리렌더링 된다.
      setAutoCompoleteInput("");
      setFilteredList(initialState);
    }
  }

  useEffect(() => {
    document.addEventListener("click", filteredListBlurListener);

    return () => document.removeEventListener("click", filteredListBlurListener);
  }, []);

  useEffect(() => {
    if (autoCompleteInput) {
      const filtering = dataList.filter((data) => data.includes(autoCompleteInput));
      setFilteredList({ focused: null, list: filtering });
    } else {
      setFilteredList(initialState);
    }
  }, [autoCompleteInput]);

  function onHandleKeyDown(e) {
    if (!filteredList.list.length) {
      return;
    }

    if (e.key === "ArrowUp") {
      if (filteredList.focused === null) {
        setFilteredList({ ...filteredList, focused: 0 });
      } else if (filteredList.focused > 0) {
        setFilteredList({ ...filteredList, focused: --filteredList.focused });
      }
    }

    if (e.key === "ArrowDown") {
      if (filteredList.focused === null) {
        setFilteredList({ ...filteredList, focused: 0 });
      } else if (filteredList.focused < filteredList.list.length - 1) {
        setFilteredList({ ...filteredList, focused: ++filteredList.focused });
      }
    }

    if (e.key === "Enter") {
      if (filteredList.focused === null) {
        alert(
          `현재 focusedIdx는 ${filteredList.focused}이고 값은 ${
            filteredList.list[filteredList.focused]
          }이다`
        );
      } else {
        alert(
          `현재 focusedIdx는 ${filteredList.focused}이고 값은 ${
            filteredList.list[filteredList.focused]
          }이다. 따라서 useNaviate을 통해 이동시키면 된다. (ex, navigate("docs/${
            filteredList.list[filteredList.focused]
          }"))`
        );
      }
    }
  }

  return (
    <HomeBoxMedia>
      <h1>Overview</h1>

      <div className="part toggle">
        <h2>Toggle</h2>
        <p>우측 하단 day & night 버튼</p>
      </div>

      <div className="part modal">
        <h2>Modal</h2>
        <p>헤더 우측 로그인 버튼 </p>
      </div>

      <div className="part click-to-edit">
        <h2>Click-To-Edit</h2>
        <S.ClickToEditBox>
          <p className="description">상단 게스트 로그인 후 설정 - 닉네임 변경</p>

          <div className="edit-test">
            <span>❤️ sample</span>

            <div className="edit-box">
              <div
                className={`input-wrapper${editState.editable ? " hide" : ""}`}
                onClick={() => {
                  setEditState({ ...editState, editable: true });
                }}
              ></div>
              <input
                type="text"
                value={editState.value}
                ref={editInputRef}
                onChange={(e) => {
                  setEditState({ ...editState, value: e.target.value });
                }}
              />
            </div>
          </div>
        </S.ClickToEditBox>
      </div>

      <div className="part tab">
        <h2>Tab</h2>

        <S.TabBox>
          <p>상단 게스트 로그인 후 설정 - Tab리스트 </p>

          <div className="tab-test">
            <span>❤️ sample</span>

            <div className="tab-box">
              <ul className="tab-titles">
                {tab.content.map((eachContent, idx) => (
                  <li
                    key={eachContent}
                    className={tab.currentIdx === idx ? "active" : ""}
                    onClick={() => {
                      setTab((prev) => ({ ...prev, currentIdx: idx }));
                    }}
                  >{`tab${idx + 1}`}</li>
                ))}
              </ul>

              <span className="tab-content">{tab.content[tab.currentIdx]}</span>
            </div>
          </div>
        </S.TabBox>
      </div>

      <div className="part tag">
        <h2>Tag</h2>

        <S.TagBox>
          <span>❤️ sample</span>

          <Tag />
        </S.TagBox>
      </div>

      <div className="part auto-complete">
        <h2>Auto-complete</h2>

        <S.AutoCompleteBox>
          <p>상단 게스트 로그인 후 헤더 검색창 </p>
          <span>❤️ sample</span>

          <div className="auto-complete-text">
            <input
              type="text"
              ref={filteredInputRef}
              value={autoCompleteInput}
              placeholder="가~기 사이로 검색해보세요!"
              onChange={(e) => setAutoCompoleteInput(e.target.value)}
              onKeyDown={onHandleKeyDown}
            />

            <ul className={`auto-complete-ul${!filteredList.list.length ? " hide" : ""}`}>
              {filteredList.list.map((keyword, keywordIdx) => (
                <li
                  key={keyword}
                  className={filteredList.focused === keywordIdx ? "focused" : ""}
                  onClick={() => {
                    alert("자식을 Link로 두고 이동하게 한다");
                  }}
                >
                  {keyword.split("").map((letter, i) => (
                    <span key={i} className={autoCompleteInput.includes(letter) ? "highlight" : ""}>
                      {letter}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </S.AutoCompleteBox>
      </div>
    </HomeBoxMedia>
  );
}

const S = {
  HomeBox: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    & > *.part {
      display: flex;
      align-items: center;

      padding-bottom: 3rem;
      border-bottom: 1px solid gray;

      & h2 {
        width: 20%;
        margin-right: 2rem;
        border-right: 1px solid gray;
      }
    }

    h1 {
      border-bottom: 1px solid gray;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
    }
  `,
  ClickToEditBox: styled.div`
    flex: 1;
    word-break: keep-all;
    height: 7rem;

    & .edit-test {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;

      & .edit-box {
        position: relative;
        width: 10rem;
        overflow: hidden;

        & .input-wrapper {
          background-color: transparent;
          width: 100%;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1000;
          width: 120%;
          height: 120%;
          cursor: pointer;

          &.hide {
            display: none;
          }
        }

        & input {
          width: 100%;
          height: 100%;
          padding: 0;
          text-align: center;
        }
      }
    }
  `,

  TabBox: styled.div`
    flex: 1;
    word-break: keep-all;

    & .tab-test {
      gap: 1rem;
      margin-top: 1rem;

      & .tab-box {
        margin-top: 1rem;

        & .tab-titles {
          display: flex;
          justify-content: center;
          align-items: center;

          gap: 1rem;
          border: 1px solid gray;
          margin-bottom: 1rem;
          padding: 0 0.5rem;
          width: 40%;

          & li {
            cursor: pointer;
            margin-bottom: 1rem;
            position: relative;

            &.active {
              &:before {
                content: "";
                width: 100%;
                height: 0.3rem;
                position: absolute;
                bottom: -2px;
                right: 0;
                background-color: ${({ theme }) => theme.colors.fontColor};
              }
            }
          }
        }

        & .tab-content {
          display: inline-block;
          margin-top: 0.5rem;
          padding: 1rem;
          border-radius: 5px;
          color: ${({ theme }) => theme.colors.blackZero};
          background-color: ${({ theme }) => theme.colors.starColor};
        }
      }
    }
  `,
  TagBox: styled.div`
    flex: 1;
  `,

  AutoCompleteBox: styled.div`
    flex: 1;
    word-break: keep-all;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 30rem;

    & .auto-complete-text {
      padding: 2rem;

      & input {
        width: 100%;
        height: 3rem;
        padding: 0.5rem;
      }

      & ul.auto-complete-ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        border: 1px solid gray;

        &.hide {
          display: none;
        }

        & li {
          width: fit-content;
          cursor: pointer;
          &.focused {
            text-decoration: underline;
          }
        }

        & li > span.highlight {
          font-weight: bold;
          color: ${({ theme }) => theme.colors.pointCarrot};
        }
      }
    }
  `,
};

const HomeBoxMedia = styled(S.HomeBox)`
  @media screen and (max-width: 1200px) {
    & > *.part {
      & h2 {
        width: 50%;
        font-size: 1.6rem;
      }
    }

    ${S.TabBox} {
      & .tab-test {
        & .tab-box {
          & .tab-titles {
            width: 100%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    & > *.part {
      & h2 {
        width: 40%;
        font-size: 1.5rem;
      }

      & p {
        font-size: 1.2rem;
      }
    }

    ${S.AutoCompleteBox} {
      & .auto-complete-text {
        & ul.auto-complete-ul {
          & li {
            font-size: 1.3rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    ${S.AutoCompleteBox} {
      & .auto-complete-text {
        & ul.auto-complete-ul {
          & li {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;

export default Main;
