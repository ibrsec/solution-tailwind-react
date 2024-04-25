import React from "react";
import product_bg from "../img/product-bg.png";
import product_content from "../img/product-content.png";
const Home = () => {
  const bg = {
    background: `url(${product_bg})`,
  };
  return (
    <section className=" bg-[#F8FDCF]  min-h-[100vh] h-auto">
      <div className="top-container flex    flex-col-reverse md:flex-row">
        <div className="basis-10/12 md:basis-1/2  h-100 flex flex-col pt-5 md:pt-28 gap-14 pb-16 md:pb-1">
          <h6 className="tracking-wide text-md lg:text-lg">
            Product Growth Solution in Single Platform.
          </h6>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-wide  ">
            Managing business payments has never been easier
          </h1>
          <p className="text-md lg:text-lg text-slate-600">
            Never at water me might. On formed merits hunted unable merely by mr
            whence or. Possession the unpleasing simplicity her uncommonly.
          </p>
          <form className="w-96 lg:w-10/12   flex align-items-center justify-between bg-white rounded-lg py-1 lg:py-2 pr-3 pl-5">
            <input
              type="email"
              className=" bg-transparent focus:outline-none w-100 lg:w-80 pt-2 peer"
              placeholder="Register using email adress"
            />
          <p className="text-red-300 text-xs text-nowrap absolute  invisible peer-invalid:visible">Invalid Email!  </p>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>

        </div>
        <div className="basis-10/12 md:basis-1/2 relative   lg:top-32    ">
          <img src={product_content} alt="" className="mx-auto  w-96 md:w-auto" />
        </div>
      </div>
    </section>
  );
};

export default Home;
