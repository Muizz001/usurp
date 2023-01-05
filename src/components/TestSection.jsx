import React, { useEffect, useRef } from "react";
import jobhunt from "../assets/jobhunt.svg";
import speedtest from "../assets/speedtest.svg";

const TestSection = () => {
  const textRef = useRef();
  const testRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        entry.target.classList.add("slideinright");
      }
    });
    observer.observe(textRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        entry.target.classList.add("slideinleft");
      }
    });
    observer.observe(testRef.current);
  }, []);

  return (
    <div className="flex w-full">
      <div className="w-full flex flex-col lg:flex-row-reverse md:px-20 px-10">
        <div className="lg:ml-10" ref={textRef}>
          <h3 className="sm:text-5xl text-3xl font-bold text-gray-300">
            Know Yourself Better!
          </h3>
          <p className="text-xl text-gray-500 w-full mt-2">
            Take world class reputed psychometric tests. Choose your career path
            accordingly!
          </p>
        </div>

        <div
          className="w-full flex lg:flex-row flex-col gap-5 md:gap-0 mt-5 justify-between"
          ref={testRef}
        >
          <div className="lg:w-[45%] w-full rounded-md flex flex-col p-5 items-center">
            <img
              src={speedtest}
              alt="Understanding Self"
              className="w-[240px] h-[245px]"
            />
            <div className="w-[95%] mt-8  border-t-2 border-secondary pt-5 flex flex-col gap-2 justify-center items-center">
              <h4 className="text-xl text-gray-400">Career Aptitude test</h4>
              <p className="text-base text-gray-400">
                Login and take the test!
              </p>
              <button className="h-16 w-48 bt-gradient my-2 rounded-md text-2xl text-gray-300 font-semibold flex justify-center items-center text-center">
                Take Test
              </button>
            </div>
          </div>
          <div className="lg:w-[45%] w-full rounded-md flex flex-col p-5 items-center">
            <img
              src={jobhunt}
              alt="Understanding Self"
              className="w-[240px] h-[245px]"
            />
            <div className="w-[95%] mt-8 border-t-2 border-secondary pt-5  flex flex-col gap-2 justify-center items-center text-center">
              <h4 className="text-xl text-gray-400">Understanding Self</h4>
              <p className="text-base text-gray-400">
                Login and take the test!
              </p>
              <button className="h-16 w-48 bt-gradient my-2 rounded-md text-2xl text-gray-300 font-semibold flex justify-center items-center">
                Take Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSection;
