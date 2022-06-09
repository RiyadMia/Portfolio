import React from "react";
import mobile from "../../images/mobile-shop.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mx-16 my-16">
      <h1 className="mt-5 mb-5 text-3xl font-bold text-center text-orange-700 ">
        Featured Projects
      </h1>
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              style={{ height: "200px" }}
              src="https://www.pinclipart.com/picdir/big/336-3367768_electro-mechanical-technological-know-how-in-mechanical-animation.png"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-orange-600 font-bold">
              Electric-Parts !
            </h2>
            <p>
              EQUIPMENT REPAIR. We are ready 24 hours a day, every day of the
              year, to provide you: A Quick Response. By a Trained Technician.
              With the Right Parts.
            </p>
            <div class="card-actions">
              <Link to="/ditals">
                <button class="btn btn-primary">More Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://media.istockphoto.com/vectors/patients-people-in-doctors-waiting-room-vector-illustration-cartoon-vector-id1256197663"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-orange-600 font-bold">
              Doctor Service !
            </h2>
            <p>
              Find your Doctor! Get Telemedicine and Doctor Video Consultation
              service with thousands of Doctors and Hospitals in Bangladesh{" "}
            </p>
            <div class="card-actions">
              <Link to="/doctor">
                <button class="btn btn-primary">More Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={mobile} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-orange-600 font-bold"> Mobile Shop !</h2>
            <p>
              Trusted online shop in Bangladesh for genuine mobile, computer,
              perfume, watch, electronics & appliances. 0% interest on EMI. 3
              Days Return. Happy shopping
            </p>
            <div class="card-actions">
              <Link to="/online">
                <button class="btn btn-primary">More Details </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
