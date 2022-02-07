import { useState } from "react";

function useForm(initialValues) {
  const [formState, setFormState] = useState(initialValues);
  const [submitState, setSubmitState] = useState({
    status: "",
    message: "",
  });

  function onHanldeInput(key, value) {
    setFormState((prev) => {
      return { ...prev, [key]: value };
    });
  }
  function onHandleSubmit(e, helper) {
    e.preventDefault();
    helper(formState, submitState, setSubmitState);
  }

  function onResetFormState() {
    setFormState(initialValues);
    setSubmitState({
      status: "",
      message: "",
    });
  }

  return {
    formState,
    submitState,
    onHanldeInput,
    onHandleSubmit,
    onResetFormState,
  };
}

export default useForm;
