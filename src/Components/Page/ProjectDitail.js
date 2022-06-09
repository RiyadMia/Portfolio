import React from "react";

const ProjectDitail = () => {
  return (
    <div className="my-16 text-white mx-28">
      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold text-primary ">
          Electric-Parts Wearhouse
        </h1>
        <button class="btn btn-secondary mt-5 mb-5  ">
          <a href="https://electric-parts.web.app/">Live Link</a>
        </button>
      </div>
      <h1 className="mb-6 text-3xl font-bold text-orange-600 ">
        Wibeside Ditals
      </h1>
      <ul>
        <li>
          ● Electric-parts. is a MERN application where user can order any kind
          of tools and pay with credit card
        </li>
        <li>
          ● Admin and user have different dashboards .Users can see their Users
          can see their order list on the dashboard.
        </li>
        <ol>
          ● Admins have restricted access and they can see, update and manage
          customer's orders and change their status accordingly.
        </ol>
        <h1 className="text-xl font-bold">Technology Used :</h1>
        <li>
          ● React Js, Express Js , MongoDB ,Firebase ,Stripe, Heroku, Node Js.
        </li>
      </ul>
    </div>
  );
};

export default ProjectDitail;
