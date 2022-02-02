import { emailValidator, passwordValidator } from "utils/helpers/validators";

export function registerLogic(formState, submitState, setSbumitState) {
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

  setSbumitState({
    status: "ok",
    message: "",
  });
}
