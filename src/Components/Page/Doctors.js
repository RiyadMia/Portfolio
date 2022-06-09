import React from "react";

const Doctors = () => {
  return (
    <div className="my-16 text-white mx-28">
      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold text-primary ">Doctors-Portal</h1>
        <button class="btn btn-secondary mt-5 mb-5  ">
          <a href="https://acinment-1afa0.web.app/">Live Link</a>
        </button>
      </div>
      <ul>
        <h1 className="mb-6 text-3xl font-bold text-orange-600 ">
          Wibeside Ditals
        </h1>
        <li>
          <ol>
            ● Doctors portal is a React application where user can choose their
            service.
          </ol>
          <ol>● User can login with both social and email</ol>
          <ol>● User can reset their password if they forget it.</ol>
          <h1 className="text-xl font-bold ">Technology Used :</h1>
          <ol>● React Js ,Firebase, Bootstrap CSS</ol>
        </li>
      </ul>
    </div>
  );
};

export default Doctors;
