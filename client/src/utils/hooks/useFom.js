import { useState } from "react";

function useForm(initialValues) {
  const [formState, setFormState] = useState(initialValues);
  const [submitState, setSubmitState] = useState({
    status: "",
    message: "",
    success: false,
  });

  function onHanldeInput({ key, value }) {
    setFormState((prev) => {
      return { ...prev, [key]: value };
    });
  }

  function onHandleSubmit(submitState) {
    setSubmitState(submitState);
  }

  return {
    formState,
    submitState,
    onHanldeInput,
    onHandleSubmit,
  };
}

export default useForm;
