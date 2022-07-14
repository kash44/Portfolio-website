import React, { forwardRef, useRef } from "react";
import emailjs from "@emailjs/browser";
import useInput from "../../hooks/useInput";
import Headers from "../Headers/Headers";

type Props = {};

const Contact = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const form = useRef<HTMLFormElement>(null!);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value: string) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value: string) => value.includes("@"));

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    messageValueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value: string) => value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Emailjs API
    emailjs.sendForm(
      "service_9my8uuw",
      "template_2pfd0kt",
      form.current,
      "krCuNthwl7dU-BmvV"
    );

    resetNameInput();
    resetEmailInput();
    resetMessageInput();
  };

  return (
    <div id="Contact" ref={ref} className="container flex px-5 mx-auto mt-20 md:h-screen md:mt-36 xl:max-w-screen-lg">
      <div className="flex flex-col w-full text-white">
        <Headers>CONTACT</Headers>
        <form className="text-black" ref={form} onSubmit={sendEmail} action="">
          <div className={`mb-4`}>
            <label className="text-white" htmlFor="">
              Your name
            </label>
            <input
              className={
                `mb-3 w-full rounded-lg border-0 p-3.5 ` +
                (nameInputHasError ? "bg-red-300" : "")
              }
              type="text"
              placeholder="Your full name"
              value={enteredName}
              onChange={nameChangedHandler}
              onBlur={nameBlurHandler}
            />
            {nameInputHasError && (
              <div className="text-red-500">Name field must not be empty</div>
            )}
          </div>
          
          <div className="mb-4">
            <label className="text-white" htmlFor="">
              Your Email
            </label>
            <input
              className={
                `mb-3 w-full rounded-lg border-0 p-3.5 ` +
                (emailInputHasError ? "bg-red-300" : "")
              }
              type="text"
              placeholder="Valid email address"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailInputHasError && (
              <div className="text-red-500">E-mail field must not be empty</div>
            )}
          </div>
          
          <div className="mb-4">
            <label className="text-white" htmlFor="">
              Your message
            </label>
            <textarea
              className={
                `min-h-[250px] w-full rounded-lg border-0 p-3.5 ` +
                (messageInputHasError ? "bg-red-300" : "")
              }
              placeholder="Your message"
              value={enteredMessage}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            />
            {messageInputHasError && (
              <div className="text-red-500">
                Message field must not be empty
              </div>
            )}
          </div>
          
          <button
            className="flex items-center w-40 h-12 text-white place-content-center rounded-2xl hover:bg-[#0E8FB0] bg-royalBlue disabled:cursor-not-allowed disabled:bg-gray-500"
            disabled={!formIsValid}
            type="submit"
            onClick={sendEmail}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
});

export default Contact;
