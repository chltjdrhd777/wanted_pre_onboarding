import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import axios from "redux/api/axios";
import { useDispatch } from "react-redux";
import { setLogggedIn } from "redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

function UserIconDrop() {
  const userIconLayoutRef = useRef(null);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    function detectOutside(e) {
      if (userIconLayoutRef.current && !userIconLayoutRef.current.contains(e.target)) {
        setDropDownOpen(false);
      }
    }

    document.addEventListener("click", detectOutside);
    return () => document.removeEventListener("click", detectOutside);
  }, []);

  return (
    <S.UserIconLayout ref={userIconLayoutRef}>
      <S.UserIcon
        className="flex-center"
        onClick={() => {
          setDropDownOpen((prev) => !prev);
        }}
      >
        <i className="far fa-user"></i>
      </S.UserIcon>

      {dropDownOpen && (
        <S.DropdownBox>
          <S.DropdownContainer>
            <ul>
              <li
                className="option"
                onClick={() => {
                  setDropDownOpen(false);
                  navigate("/setting");
                }}
              >
                <i className="fas fa-cog"></i>
                <span>설정</span>
              </li>

              <li
                className="option"
                onClick={() => {
                  axios.get("/auth/signout");
                  setDropDownOpen(false);
                  dispatch(setLogggedIn());
                }}
              >
                <i className="fas fa-sign-out-alt"></i>
                <span>로그아웃</span>
              </li>
            </ul>
          </S.DropdownContainer>
        </S.DropdownBox>
      )}
    </S.UserIconLayout>
  );
}

const S = {
  UserIconLayout: styled.div`
    position: relative;
  `,
  UserIcon: styled.div`
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
    padding: 1.5rem;
    border: 0.13rem solid ${({ theme }) => theme.colors.pointBlue};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.fontColor};
    position: relative;
  `,
  DropdownBox: styled.div`
    position: absolute;
    width: fit-content;
    background-color: ${({ theme }) => theme.colors.boxBackground};
    top: 4rem;
    right: 0.2rem;
    z-index: 300;
    border: 1px solid gray;
    border-radius: 2rem;
    padding: 2rem;
  `,
  DropdownContainer: styled.div`
    width: 100%;
    height: 100%;
    justify-content: space;

    & ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      & li {
        display: flex;
        gap: 0.5rem;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }

        & i {
          margin-right: 0.5rem;
        }

        & span {
          white-space: nowrap;
        }
      }
    }
  `,
};

const DropdownBox = styled.div``;

export default UserIconDrop;
