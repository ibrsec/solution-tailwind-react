import React from "react";

import logo from "../img/logo.png";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="bg-[#D7E5CA]">
      <div className="top-container py-16 flex flex-col  lg:flex-row items-center lg:items-start gap-3 border-b border-gray-300 ">
        <div className="basis-1/4 flex flex-col gap-3">
          <h5 className="logo flex items-center gap-2 font-[600] text-lg   justify-center lg:justify-start  cursor-pointer">
            <img src={logo} width="25px" alt="" />
            <p>Solution</p>
          </h5>
          <p className="text-slate-500 text-sm text-center lg:text-start">
            Build a modern and creative website with Solution
          </p>
          <div className="icons flex items-center gap-3 text-slate-700  justify-center lg:justify-start">
            <FaLinkedinIn className=" cursor-pointer" />
            <FaFacebookMessenger className=" cursor-pointer" />
            <FaXTwitter className=" cursor-pointer" />
            <RiInstagramFill className=" cursor-pointer" />
          </div>
        </div>
        <div className="basis-1/4 ">
          <div className=" flex flex-col items-center items-center lg:items-start gap-2">
            <h5 className="font-[700] ">Company</h5>
            <span className=" cursor-pointer text-sm">About Us</span>
            <span className=" cursor-pointer text-sm">Careers</span>
            <span className=" cursor-pointer text-sm">Blog</span>
            <span className=" cursor-pointer text-sm">Pricing</span>
          </div>
        </div>
        <div className="basis-1/4 ">
          <div className=" flex flex-col items-center items-center lg:items-start gap-2">
            <h5 className="font-[700] ">Resources</h5>
            <span className=" cursor-pointer text-sm">Templates</span>
            <span className=" cursor-pointer text-sm">Tutorials</span>
            <span className=" cursor-pointer text-sm">Free resources</span>
            <span className=" cursor-pointer text-sm">Contract templates</span>
          </div>
        </div>
        <div className="basis-1/4 ">
          <div className=" flex flex-col items-center items-center lg:items-start gap-4">
            <h5 className="font-[700] ">Join Our Newsletter</h5>
            <span className="   text-sm">
              <form className="w-96 lg:w-10/12   flex align-items-center justify-between bg-white rounded-lg py-1 lg:py-2 pr-3 pl-5">
                <input
                  type="email"
                  className=" bg-transparent focus:outline-none w-[100%] pt-2 peer lg:text-sm"
                  placeholder="Your mail address"
                />
                <p className="text-red-300 text-xs text-nowrap absolute  invisible peer-invalid:visible">
                  Invalid Email!{" "}
                </p>
                <button className="btn" type="submit">
                  Subscribe
                </button>
              </form>
            </span>
            <span className="  text-sm text-slate-400">
              * Will send you weekly updates for your better finance management.
            </span>
          </div>
        </div>
      </div>
      <div className="top-container py-8">
        <p className="text-center">Copyright @ Solution 2024. All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
