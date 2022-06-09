import React from "react";
import img from "../../images/about-6.jpg";

const Contact = () => {
  return (
    <div className=" mt-7">
      <h1 className="mb-12 text-4xl font-bold text-center text-secondary">
        PLEASE CONTACT ME
      </h1>

      <div className="flex flex-col-reverse items-center justify-center w-full gap-20 px-10 bg-gray-300 py-14 lg:flex-row ">
        <div className="">
          <div className="text-center text-white pb-14">
            <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary">
              Contact Us .
            </p>
            <h1 className="text-4xl font-bold">Stay connected with us</h1>
          </div>
          <div className="grid grid-cols-1 gap-5 justify-items-center">
            <form
              action="https://formspree.io/f/xvolyayq"
              method="POST"
              className="grid grid-cols-1 gap-5 "
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full max-w-md input"
                required
              />
              <input
                type="text"
                placeholder="Email Address"
                className="w-full max-w-md input"
                required
              />

              <textarea
                className="w-full max-w-md textarea"
                placeholder="Your message"
                rows={3}
                required
              ></textarea>
              <button className="btn btn-secondary " type="submit">
                Send Massage
              </button>
            </form>
          </div>
        </div>
        <div className="">
          <img
            className="border-r-4 "
            style={{ height: "500px", width: "500px" }}
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
