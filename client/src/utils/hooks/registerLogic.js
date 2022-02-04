import { emailValidator, passwordValidator } from "utils/helpers/validators";
import axios from "redux/api/axios";

export async function registerLogic(formState, submitState, setSbumitState) {
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

  //3. password check
  if (!passwordValidator(formState.password, formState.passwordConfirm)) {
    rejectMiddleware("패스워드가 다릅니다!");
    return;
  }

  //4. 유저 이미 있는지 체크
  try {
    await axios.post("/auth/user", { email: formState.email });

    setSbumitState({
      status: "ok",
      message: "",
    });
  } catch (err) {
    rejectMiddleware(err.response.data.message);
  }
}
