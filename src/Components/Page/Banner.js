import React from "react";
import img from "../../images/DSC_0130-removebg-preview.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 flex-col-reverse lg:flex-row-reverse flex mx-auto justify-center items-center">
      <div className="">
        <h1 className="text-5xl font-bold text-green-500">
          Juiore Wev Developer !
        </h1>
        <button className="btn btn-primary uppercase mt-5">
          <a href="https://drive.google.com/file/d/1yQeALQegUGDVnJLDs82FPxyW3PnywAOW/view">
            downlode regime
          </a>
        </button>
      </div>
      <div className="">
        <img style={{ height: "500px", width: "300px" }} src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
