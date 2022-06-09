import React from "react";

const Header = () => {
  return (
    <div className="hero min-h-screen bg-slate-900  ">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-secondary">
            Welcome To My Website. I'm A Web Designer & Developer
          </h1>

          <button className="btn btn-primary uppercase mt-5">
            <a href="https://drive.google.com/file/d/1yQeALQegUGDVnJLDs82FPxyW3PnywAOW/view">
              downlode regime
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
