import { ChangeEvent, useState } from "react";

const useInput = (validateValue: (value: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  // Have to provide argument to changeEvent, so it knows event is an HTMLInputElement
  const valueChangeHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    setEnteredValue(e.target.value);
  };

  const messageValueChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setEnteredValue(e.target.value)
  }

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    messageValueChangeHandler,
    reset
  };
};

export default useInput;
