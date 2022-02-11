import { emailValidator } from "utils/helpers/validators";
import axios from "redux/api/axios";

export async function loginLogic(formState, submitState, setSbumitState) {
  //for reset
  const initialSubmitState = {
    status: "",
    message: "",
  };

  function rejectMiddleware(message) {
    setSbumitState({
      status: "reject",
      message,
    });

    setTimeout(() => {
      setSbumitState(initialSubmitState);
    }, 1000);
  }

  //0. if rejected
  if (submitState.status === "reject") return;

  //1. empty check
  if (Object.values(formState).includes("")) {
    rejectMiddleware("빈칸을 체워주세요!");
    return;
  }

  //2. email check
  if (!emailValidator(formState.email)) {
    rejectMiddleware("올바른 이메일이 아닙니다!");
    return;
  }

  //3. get response
  try {
    const res = await axios.post("/auth/signin", formState);
    console.log(res);
    setSbumitState({
      status: "ok",
      message: "",
      userInfo: res.data,
    });
  } catch (err) {
    rejectMiddleware(err.response.data.message);
  }
}
