import React from "react";
import hero from "../assets/hero.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex py-10 px-10 md:px-20 md:flex-row flex-col justify-center md:justify-around items-center overflow-x-hidden w-full  min-h-screen">
      <div
        className=" w-full md:w-[50%] flex min-h-52 justify-evenly slideinleft"
        style={{ "--time": 1 }}
      >
        <img src={hero} alt="hero" className="w-full" />
      </div>

      <div className="w-full md:w-[45%] my-10 slideinright">
        <h1 className="text-gray-300 sm:text-5xl text-3xl font-bold">
          Create A <span className="text-gradient">Stunning</span> Portfolio
        </h1>
        <p className="text-gray-500 text-xl mt-2">
          Showcase your skills to the world. Post your projects and articles
          that make you stand out. Create a lively professional history! Join
          the community of like minded individuals to give you feedback and
          answer any questions!
        </p>
        <a href="/">
          <Button message="Start Now!" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
