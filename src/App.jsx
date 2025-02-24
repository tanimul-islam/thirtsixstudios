/*eslint-disable react/prop-types */
/*eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./index.css";
import Canvas from "./Canvas";
import data from "./data";

import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className="w-full relative min-h-screen font-helvetica-now-display text-white">
        {/* {data[0].map((canvasDetails, index) => (
          <Canvas key={index} details={canvasDetails} />
        ))} */}
        <div className="w-full h-screen text-white">
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
          <div className="textContainer w-full px-[20%]">
            <div className="text w-[50%] ">
              <h3 className="text-4xl leading-[1.2]">
                At Thirtysixstudio, we build digital assets and immersive
                experiences for purposeful brands.
              </h3>

              <p className="mt-10 text-md w-[80%] font-md">
                We're a boutique production studio focused on design, animation,
                and technology, constantly rethinking what digital craft can do
                for present-day ads and campaigns.
              </p>
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
    </>
  );
};

export default App;
