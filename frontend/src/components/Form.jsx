import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const form = useRef();
  const notify = () => {
    toast.success(
      "Your message was successfully sent and you will receive an answer very soon",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_EMAILJS_SERVICE}`,
        `${import.meta.env.VITE_EMAILJS_TEMPLATE}`,
        form.current,
        `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.warn(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="formBG m-0 pt-4">
      <form className="container" id="form" ref={form} onSubmit={sendEmail}>
        <h1 className="text-center fs-1 mb-4 importantText">CONTACT</h1>
        <div className="container row m-0">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column align-items-center align-items-sm-center align-items-md-end align-items-lg-end align-items-xl-end">
            <input
              type="text"
              name="Firstname"
              id="nameinput"
              placeholder="Firstname"
              required
              className="mb-2 rounded w-75 textRegular"
            />
            <input
              type="text"
              name="Lastname"
              id="nameinput"
              placeholder="Lastname"
              required
              className="mb-2 rounded w-75 textRegular"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              className="rounded w-75 thirdInput textRegular"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column align-items-center align-items-sm-center align-items-md-start align-items-lg-start align-items-xl-start">
            <textarea
              name="Message"
              placeholder="Message"
              required
              className="rounded w-75 h-100"
            />
          </div>
          <div className=" col -12 text-end mt-2">
            <button
              type="submit"
              onClick={notify}
              className="btn btn-success text-white formSendButton mb-2 contactButton textRegular"
            >
              Send
            </button>
          </div>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Form;
