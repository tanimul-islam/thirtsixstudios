import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CircularTextAnimation = () => {
  const wheelRef = useRef(null);

  useEffect(() => {
    gsap.to(wheelRef.current, {
      duration: 10,
      rotation: 360,
      repeat: -1,
      ease: "linear",
      // The rotation should be centered around the circle's center.
      transformOrigin: "150px 150px",
    });
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[300px] h-[300px]">
        <svg width="300" height="300" viewBox="0 0 300 300">
          <defs>
            {/* Define a circular path */}
            <path
              id="circlePath"
              d="M150,150 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
            />
          </defs>
          {/* Rotate the entire group to simulate a wheel */}
          <g ref={wheelRef}>
            <text fontSize="16" fill="#000">
              <textPath
                href="#circlePath"
                className="font-medium  tracking-wide"
              >
                {
                  "- THIRTY SIX STUDIO -FOR ALL THINGS DIGITAL PRODUCTION - THIRTY SIX STUDIO - "
                }
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CircularTextAnimation;
