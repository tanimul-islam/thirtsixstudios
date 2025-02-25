/*eslint-disable react/prop-types */
/*eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./index.css";
import Canvas from "./Canvas";
import data from "./data";

import LocomotiveScroll from "locomotive-scroll";
import CircularTextAnimation from "./circlePath";

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className="w-full relative min-h-screen font-helvetica-now-display text-black">
        {/* {data[0].map((canvasDetails, index) => (
          <Canvas key={index} details={canvasDetails} />
        ))} */}
        <div className="w-full h-screen  text-black">
          <nav className=" w-full p-8  flex justify-between z-50">
            <div className="brand text-2xl font-regular">thirtysixstudios</div>
            <div className="links flex gap-10">
              {["Home", "About", "Contact", "Projects"].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-400"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textContainer flex flex-row justify-center items-center w-full px-[20%]">
            <div className="mr-20 text w-[40%]">
              <h3 className="text-3xl leading-[1.2]">
                At Thirtysixstudio, we build digital assets and immersive
                experiences for purposeful brands.
              </h3>
              <p className="mt-10 text-sm w-fit font-normal">
                We&apos;re a boutique production studio focused on design,
                animation, and technology, constantly rethinking what digital
                craft can do for present-day ads and campaigns.
              </p>
              <p className="text-md mt-10">Scroll</p>
            </div>
            <div className="wheel-container w-[40%]">
              <CircularTextAnimation />
            </div>
          </div>

          <div className="container overflow-x-hidden">
            <div className="w-full absolute bottom-0 left-0 ">
              <h1 className="text-[13.5rem] font-normal leading-none tracking-tight pl-5">
                Thirtysixstudio
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full relative min-h-screen   text-white">
        {data[1].map((canvasDetails, index) => (
          <Canvas key={index} details={canvasDetails} />
        ))}
      </div>
      <div className="w-full relative min-h-screen   text-white">
        {data[2].map((canvasDetails, index) => (
          <Canvas key={index} details={canvasDetails} />
        ))}
      </div>
      <div className="w-full relative min-h-screen   text-white">
        {data[3].map((canvasDetails, index) => (
          <Canvas key={index} details={canvasDetails} />
        ))}
      </div> */}
      <div className="mt-15 h-[.5px] w-screen block  bg-gray-300"></div>
      <div className="section2 w-full h-screen mt-30 flex justify-center  ">
        <div className="w-1/2 font-semibold">
          <h2 className="flex justify-center items-center">
            01
            <span className="h-[2px] w-[2.4rem] block mx-[1rem] bg-black "></span>
            WHAT WE DO
          </h2>
        </div>
        <div className="w-1/2">
          <div>
            <h1 className="text-3xl  font-medium leading-none w-[50%]">
              We aim to elevate digital production in the advertising space,
              bringing your ideas to life.
            </h1>
            <div className="mt-50 w-[50%] font-normal text-sm">
              <p>
                As a contemporary studio, we use cutting-edge design practices
                and the latest technologies to deliver current digital work.
              </p>
              <p className="mt-10">
                Our commitment to innovation and simplicity, paired with our
                agile approach, ensures your journey with us is smooth and
                enjoyable from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[.5px] w-screen block  bg-gray-300"></div>
      <div className="section3 w-3/4 flex flex-col justify-center items-center h-screen mx-auto">
        <h1 className="w-3/4 text-md mt-[-10rem] font-regular leading-none">
          OUR SERVICES
        </h1>
        <p className=" w-3/4 tracking-wide mt-20 font-stretch-ultra-expanded font-semibold text-3xl">
          We provide you with captivating design, interactive animations,
          reliable code, and immaculate project coordination. Whether you need a
          campaign built from scratch or assistance at a specific phase, we've
          got you covered.
        </p>
      </div>
    </>
  );
};

export default App;
