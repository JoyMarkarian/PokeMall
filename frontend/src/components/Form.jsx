function Form() {
  return (
    <div className="formBG m-0 pt-4">
      <form className="container">
        <h1 className="text-center fs-1 mb-4 importantText">contact</h1>
        <div className="container row m-0">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column align-items-center align-items-sm-center align-items-md-end align-items-lg-end align-items-xl-end">
            <input
              type="text"
              name="name"
              id="nameinput"
              placeholder="firstname"
              required
              className="mb-2 rounded w-75 textRegular"
            />
            <input
              type="text"
              name="name"
              id="nameinput"
              placeholder="lastname"
              required
              className="mb-2 rounded w-75 textRegular"
            />
            <input
              type="email"
              placeholder="email"
              className="rounded w-75 thirdInput textRegular"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column align-items-center align-items-sm-center align-items-md-start align-items-lg-start align-items-xl-start">
            <textarea className="rounded w-75 h-100" />
          </div>
          <div className=" col -12 text-end mt-2">
            <button
              type="submit"
              className="btn btn-warning mb-2 contactButton textRegular"
            >
              send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
