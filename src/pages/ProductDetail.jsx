import React from "react";
import { BiSolidAward } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <section className="bg-purple-200  min-h-[100vh] h-auto">
      
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 top-container py-10 ">

      <div className="card bg-white px-5 py-10 rounded-lg flex flex-col gap-5 ">
        <div>
          <BiSolidAward className="text-3xl text-[#F6705A]" />
        </div>
        <h4 className="text-lg font-bold">Offending belonging</h4>
        <p className="text-slate-500">
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable surprise screened no up as.
        </p>
         
      </div>
 
    </div>

    </section>
  );
};

export default ProductDetail;
