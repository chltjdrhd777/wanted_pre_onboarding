import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Tag from "component/Tag";

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
  }
`;

export default Main;
