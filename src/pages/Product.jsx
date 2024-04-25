import React from "react";

import { BiSolidAward } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link  } from "react-router-dom";

const Product = () => {
  return (
    <section className="bg-[#FFE7CE] min-h-[100vh] h-auto">
      <div className="top-container py-12">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-wide mb-5 ">
            We help your business grow faster.
          </h2>
          <p className="text-slate-500 mb-12 w-[75%] mx-auto">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <div className="card bg-white px-5 py-10 rounded-lg flex flex-col gap-5">
            <div>
              <BiSolidAward className="text-3xl text-[#F6705A]" />
            </div>
            <h4 className="text-lg font-bold">Offending belonging</h4>
            <p className="text-slate-500">
              Letter of on become he tended active enable to. Vicinity relation
              sensible sociable surprise screened no up as.
            </p>
            <Link
              to="/product-detail"
              className="text-green-600 flex items-center   font-[500] gap-1"
            >
              <span className=" ">Read more</span>
              <FaArrowRightLong className="   " />
            </Link>
          </div> 






          <div className="card bg-white px-5 py-10 rounded-lg flex flex-col gap-5">
            <div>
              <BiSolidAward className="text-3xl text-[#F6705A]" />
            </div>
            <h4 className="text-lg font-bold">Offending belonging</h4>
            <p className="text-slate-500">
              Letter of on become he tended active enable to. Vicinity relation
              sensible sociable surprise screened no up as.
            </p>
            <Link
              to="/product-detail"
              className="text-green-600 flex items-center   font-[500] gap-1"
            >
              <span className=" ">Read more</span>
              <FaArrowRightLong className="   " />
            </Link>
          </div>



          <div className="card bg-white px-5 py-10 rounded-lg flex flex-col gap-5">
            <div>
              <BiSolidAward className="text-3xl text-[#F6705A]" />
            </div>
            <h4 className="text-lg font-bold">Offending belonging</h4>
            <p className="text-slate-500">
              Letter of on become he tended active enable to. Vicinity relation
              sensible sociable surprise screened no up as.
            </p>
            <Link
              to="/product-detail"
              className="text-green-600 flex  items-center   font-[500] gap-1"
            >
              <span className=" ">Read more</span>
              <FaArrowRightLong className="  " />
            </Link>
          </div>
        </div>
        <div className="my-8 text-center">
          <button className="btn">More About Platform</button>
        </div> 
      </div>
    </section>
  );
};

export default Product;
