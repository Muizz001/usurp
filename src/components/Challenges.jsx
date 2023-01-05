import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import process from "../assets/process.svg";
import codethink from "../assets/codethink.svg";
import thought from "../assets/thought.svg";

const Challenges = () => {
  const textRef = useRef();
  const testRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        entry.target.classList.add("slideinleft");
      }
    });
    observer.observe(textRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        entry.target.classList.add("slideinright");
      }
    });
    observer.observe(testRef.current);
  }, []);

  return (
    <div className="flex w-full mt-14">
      <div className="w-full flex flex-col lg:flex-row md:px-20 px-10">
        <div className="lg:ml-10" ref={textRef}>
          <h3 className="sm:text-5xl text-3xl font-bold text-gray-300">
            Conquer Kingdoms To Get Noticed!
          </h3>
          <p className="text-xl text-gray-500 w-full mt-2">
            Game like challenges to make your journey scintilating! Earn KP's,
            badges and rewards to get noticed easily and secure a job!
          </p>
        </div>

        <div
          className="w-full flex lg:flex-row relative flex-col gap-5 md:gap-0 mt-5 justify-between"
          ref={testRef}
        >
          <div className="lg:w-[45%] w-full rounded-md flex flex-col p-5 items-center">
            <img
              src={process}
              alt="Understanding Self"
              className="w-[240px] h-[245px]"
            />
            <div className="w-[95%] mt-8  border-t-2 border-secondary pt-5 flex flex-col gap-2 justify-center items-center">
              <h4 className="text-xl text-gray-400">Challenge 1</h4>
              <p className="text-base text-gray-400">Skills</p>
              <button className="h-16 w-48 bt-gradient my-2 rounded-md text-2xl text-gray-300 font-semibold flex justify-center items-center text-center">
                Challenge 1
              </button>
            </div>
          </div>
          <div className="lg:w-[45%] w-full rounded-md flex flex-col p-5 items-center">
            <img
              src={thought}
              alt="Understanding Self"
              className="w-[240px] h-[245px]"
            />
            <div className="w-[95%] mt-8 border-t-2 border-secondary pt-5  flex flex-col gap-2 justify-center items-center text-center">
              <h4 className="text-xl text-gray-400">Challenge 2</h4>
              <p className="text-base text-gray-400">Skills</p>
              <button className="h-16 w-48 bt-gradient my-2 rounded-md text-2xl text-gray-300 font-semibold flex justify-center items-center">
                Challenge 2
              </button>
            </div>
          </div>
          <div className="lg:w-[45%] w-full rounded-md flex flex-col p-5 mb-5 items-center">
            <img
              src={codethink}
              alt="Understanding Self"
              className="w-[240px] h-[245px]"
            />
            <div className="w-[95%] mt-8 border-t-2 border-secondary pt-5  flex flex-col gap-2 justify-center items-center text-center">
              <h4 className="text-xl text-gray-400">Challenge 3</h4>
              <p className="text-base text-gray-400">Skills</p>
              <button className="h-16 w-48 bt-gradient my-2 rounded-md text-2xl text-gray-300 font-semibold flex justify-center items-center">
                Challenge 3
              </button>
            </div>
          </div>
          <a
            href="/"
            className="absolute text-gray-300 text-xl underline bottom-0 text-center w-full hover:text-secondary"
          >
            And Much More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
