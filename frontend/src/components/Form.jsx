import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_05bptfr",
        "template_b1b8eld",
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
              onClick={() => sendEmail}
              data-toggle="modal"
              data-target="#exampleModalCenter"
              className="btn btn-success text-white formSendButton mb-2 contactButton textRegular"
            >
              Send
            </button>
            <div
              className="modal fade"
              id="exampleModalCenter"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
