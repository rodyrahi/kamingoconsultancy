import React from "react";
import "./raj.scss";
import img from "./assets/websitepicto.png";
import logo from "./assets/kamingo_favicon.png";

const Rajhome = () => {
  return (
    <>
      {/* <h1>hi aman</h1> */}

      <section class="max[]">
        <nav class="flex fixed top-0 w-full justify-around items-center mx24 header max-md:justify-between">
          <div class="logo">
            <img src={logo} class="me-1 w-[2.2rem]" alt="" />
          </div>

          <div class="items mt-2">
            <ul class="list flex mt6">
              <li class="item">About</li>
              <li class="item">services</li>
              <li class="item">Contact</li>
              <li class="item">Media</li>
              <li class="item">Support</li>
            </ul>
          </div>

          <center class="serchicon">
            <img
              class="-ml10 mt-3 serchicin"
              src="./margincal/search.svg"
              alt=""
            />
          </center>
          {/* <div class="serachs -ml-20 max-[1100px]:ml-0">
            <div class="flex items-center justify-center">
              <input type="text" id="searchInput" placeholder="Search..." />
              <img class="-ml-10 mt-3" src="./margincal/search.svg" alt="" />
            </div>
            <div class="bg-black" id="searchResults"></div>
          </div> */}

          {/* <div class="login_btn mt-3">
            <button class="login -ml-24  max-[1100px]:ml-0">Sign Up</button>
          </div> */}

          <div class="hamburg mt-3" id="hamburg">
            <img src="./margincal/hamburger.svg" alt="" />
          </div>
        </nav>
      </section>

      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white sticky-top  mb-2 ">
          <div className="container-fluid ">
            {/* <img src={logo} class="me-1 w-[2.2rem]" alt="" srcset="" /> */}
            {/* <a class="navbar-brand fw-bolder me-auto " href="/">
              KamingoConsultancy
            </a> */}
          </div>
        </nav>
        <div class="ro vh100 flex items-end pt-28 justify-center p-20 ">
          <div class="co flex flex-col items-start m40 justify-end p-10">
            <h1 class="mt-5 main_heading">We Create</h1>
            <h1 className="heading2">What You Want</h1>
            <p className="peragraph my-8">
              Kamingo Constultancy is a website which can help you create
              websites and beautiful apps
            </p>
            <div className="flex">
              <button className="login m3 text-2xl" type="">
                Start
              </button>
              <button className="login text-2xl mx-4" type="">
                Contact
              </button>
            </div>
          </div>
          <div className="col w-[50%]">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rajhome;
