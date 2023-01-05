import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full p-10 mt-10">
      <div className="flex lg:justify-around justify-start flex-wrap">
        <div className="flex flex-col space-between lg:w-[initial] overflow-x-hidden w-[50%]">
          <p className="text-xl text-[#25b8ef]">Policies</p>
          <a
            href="https://usurp.tech/termsofservice"
            className="text-gray-300 mt-5"
          >
            Terms of Service
          </a>
          <a
            href="https://usurp.tech/privacypolicy"
            className="text-gray-300 mt-5"
          >
            Privacy Policy
          </a>
          <a href="https://usurp.tech/contactus" className="text-gray-300 mt-5">
            Contact Us
          </a>
        </div>
        <div className="flex flex-col space-between lg:w-[initial] w-[50%]">
          <p className="text-xl text-[#25b8ef]">Useful Links</p>
          <a
            href="https://usurp.tech/gettingstarted"
            className="text-gray-300 mt-5"
          >
            Getting Started with Usurp
          </a>
          <a href="https://usurp.tech/usingapp" className="text-gray-300 mt-5">
            How to use the platform
          </a>
        </div>

        <div>
          <p className="text-xl lg:mt-0 mt-5 mb-4 text-[#25b8ef]">
            Social Media Accounts of Usurp...
          </p>
          <div className="flex lg:flex-col gap-6 flex-row">
            <label htmlFor="Twitter">
              <a href="https://twitter.com/usurptech">
                <FaTwitter
                  style={{ color: "#25b8ef", cursor: "pointer" }}
                  size={30}
                />
              </a>
            </label>
            <a href="https://www.instagram.com/_usurp/">
              <FaInstagram
                style={{ color: "#25b8ef", cursor: "pointer" }}
                size={30}
              />
            </a>
            <a href="https://www.linkedin.com/company/usurp-tech/">
              <FaLinkedinIn
                style={{ color: "#25b8ef", cursor: "pointer" }}
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-400 mt-10 text-center">
        <p>Made in India with &#128153; </p>
      </div>
    </div>
  );
};

export default Footer;
