import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useQuery, useMutation } from "react-query";
import axios from "redux/api/axios";
import { makeClassName } from "utils/helpers/makeClassName";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogggedIn } from "redux/slice/userSlice";

function ProfileTab() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [editValue, setEditValue] = useState({
    nickname: "ready",
  });
  const { data, isLoading, isSuccess, isError, isFetchedAfterMount, ...rest } = useQuery(
    ["profile"],
    () => axios.get("/user"),
    {
      refetchOnMount: true,
    }
  );
  console.log(rest);
  const userInfoMutation = useMutation(
    (data) => {
      return axios.post("/user", data);
    },
    {
      onSuccess: () => {
        navigate("/");
      },
      onError: () => {
        dispatch(setLogggedIn());
        navigate("/");
      },
    }
  );

  useEffect(() => {
    if (isError) {
      dispatch(setLogggedIn());
      navigate("/");
    }
  }, [isError]);

  useEffect(() => {
    if (isFetchedAfterMount) {
      setUser(data.data.user);
    }
  }, [isFetchedAfterMount]);

  if (isLoading) {
    return <p>유저 정보 요청중...</p>;
  }

  return (
    <ProfileBoxMedia>
      <div className="thumbImg">
        <h3 className="title">프로필 이미지</h3>
        <img src={user.thumbImg} alt="유저이미지" />
      </div>

      <div className="nickname">
        <h3 className="title">닉네임</h3>

        {editValue.nickname === "ready" ? (
          <span
            className="flex-center"
            onClick={() => {
              setEditValue((prev) => {
                return { ...prev, nickname: user.nickname };
              });
            }}
          >
            {user.nickname}
          </span>
        ) : (
          <input
            className="nickname-edit"
            value={editValue.nickname}
            onChange={(e) => {
              setEditValue((prev) => {
                return { ...prev, nickname: e.target.value };
              });
            }}
            autoFocus
            maxLength={11}
            onBlur={() => {
              if (!editValue.nickname) {
                setEditValue((prev) => {
                  return { ...prev, nickname: "ready" };
                });
                return;
              }

              setUser({ ...user, nickname: editValue.nickname });

              setEditValue((prev) => {
                return { ...prev, nickname: "ready" };
              });
            }}
          />
        )}
      </div>

      <div className="role">
        <h3 className="title">타입</h3>

        <div className={makeClassName(["role-tag", user.role === "user" ? "user" : "admin"])}>
          {user.role}
        </div>
      </div>

      <div className="edit-button">
        <button
          className="btn edit-btn"
          onClick={() => {
            if (userInfoMutation.isLoading) {
              return;
            }
            userInfoMutation.mutate({ ...user });
          }}
        >
          수정하기
        </button>
      </div>
    </ProfileBoxMedia>
  );
}

const S = {
  ProfileBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 7rem;
    margin-top: 2rem;
    width: 45%;

    & > * {
      display: flex;
      & h3 {
        width: 15rem;
        margin-right: 5rem;
        word-break: keep-all;
      }
    }

    .thumbImg {
      & img {
        width: 7rem;
      }
    }

    .nickname {
      & span {
        cursor: pointer;
        border: 1px solid transparent;
        font-size: 1.6rem;
      }

      .nickname-edit {
        font-size: 1.6rem;
        letter-spacing: 0.05rem;
        padding: 0;
        width: fit-content;
      }
    }

    .role {
      & .role-tag {
        border-radius: 10rem;
        padding: 0.5rem;

        &.user {
          border: 1px solid gray;
        }

        &.admin {
          background-color: ${({ theme }) => theme.colors.starColor};
        }
      }
    }

    .edit-button {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }
  `,
};

const ProfileBoxMedia = styled(S.ProfileBox)`
  @media screen and (max-width: 1000px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    .edit-button {
      justify-content: center;
    }
  }
`;

export default ProfileTab;
