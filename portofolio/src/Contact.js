function Contact() {
  return (
    <>
      <div className="contact d-flex justify-content-center align-items-center">
        <div className="foorm mx-5 w-100">
          <div className="container">
            <h2 className="text-center my-3 text-white">Contact</h2>
          </div>
          <form>
            <div className="form-group my-3">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="form-control my-2"
                id="firstName"
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="form-control my-2"
                id="lastName"
                placeholder="Enter your last name"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control my-2"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
