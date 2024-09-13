import React from "react";
import  MotionCards from "./MotionCards";
import Navbar from "../components/Navbar";
import logo from "../assets/logows.png"

function HomePage() {
  return (
    <>
      <Navbar />
      <section className="bg-[#d393a4]">
        <br />
        <section className="">
          <div className="container mx-auto mb-[5%] max-[1000px]:mb-[20%]">
            <div className="flex justify-center"></div>
          </div>
        </section>
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 mt-2">
              <div>
                <h1 className="text-2xl font-semibold text-gray-800  lg:text-5xl ">
                  Bienvenido a<br /> SamyCrochetCreations{" "}
                </h1>
                <div className="mt-2">
                  <span className="inline-block w-40 h-1 rounded-full bg-[#829ab1]"></span>
                  <span className="inline-block w-3 h-1 ml-1 rounded-full bg-[#476b90]"></span>
                  <span className="inline-block w-1 h-1 ml-1 rounded-full bg-[#123252]"></span>
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize ">
                    ¿Quien soy?
                  </h1>
                  <p className="mt-3 text-black-500 ">
                    Soy una emprendedora creativa que diseña y teje
                    piezas únicas de crochet. Mis creaciones, hechas a mano,
                    celebran la calidez y la autenticidad del trabajo artesanal.
                  </p>
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4"></div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-[#54397d] bg- rounded-white xl md:mx-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-black capitalize ">
                    Prioridades
                  </h1>
                  <p className="mt-3 text-black ">Servicio al Cliente</p>
                  <p className="mt-3 text-black ">Calidad</p>
                  <p className="mt-3 text-black ">Precios Competitivos</p>
                </div>
              </div>
            </div>

            <div className="flex" id="idPage">
              <div className="mt-[25px] w-full ml-[10rem] max-[1000px]:mx-[auto]">
                <div className="mt-[auto]">
                  <div className="w-[full] h-full">
                    <div className="mt-5">
                      <img
                        className="w-65 h-65 rounded-md mx-auto"
                        src={logo}
                        alt="Graphic Design"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MotionCard s />
    </>
  );
}

export default HomePage;
