import React from "react";

const Blog = () => {
  return (
    <section className="bg-[#f1e9d1] min-h-[100vh] h-auto">
      <div className="top-container py-12">
        <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row  gap-3 ">
          <h2 className=" text-2xl lg:text-3xl font-[600]   ">
            Our Latest Blog Posts
          </h2>
          <button className="btn">Sell All Blog Posts</button>
        </div>
        <div className="all-contents grid   md:grid-cols-3   gap-5 py-8 ">
          <div className="big-contents     md:col-span-2 grid sm:grid-cols-2 gap-6 ">
            <div className="  flex flex-col pb-4">
              <img
                className=" rounded-xl  "
                src="https://assets.website-files.com/629875d8244c28fdb35e6350/62a1ce20a367c81bd4ad041d_Rectangle%20177.png"
                width="100%"
                alt=""
              />
              <div className="py-4">
                <div className=" mb-3 ">
                  <span className="me-3 text-slate-400">08-11-2021</span>
                  <span className="text-slate-400">Category</span>
                </div>
                <h5 className="mb-3 font-bold text-lg">
                  Believing neglected so so allowance existence departure.
                </h5>
                <p className="  text-slate-500">
                  Blessing welcomed ladyship she met humoured sir breeding her.
                  Six curiosity day assurance bed necessary.
                </p>
              </div>
            </div>
            <div className="  flex flex-col pb-4">
              <img
                className=" rounded-xl  "
                src="https://assets.website-files.com/629875d8244c28fdb35e6350/62a1ce21f4890f82b764cfc9_Rectangle%20178.png"
                width="100%"
                alt=""
              />
              <div className="py-4">
                <div className=" mb-3 ">
                  <span className="me-3 text-slate-400">08-11-2021</span>
                  <span className="text-slate-400">Category</span>
                </div>
                <h5 className="mb-3 font-bold text-lg">
                  Believing neglected so so allowance existence departure.
                </h5>
                <p className="  text-slate-500">
                  Blessing welcomed ladyship she met humoured sir breeding her.
                  Six curiosity day assurance bed necessary.
                </p>
              </div>
            </div>
          </div>
          <div className="small-contents     ">
            <div className="flex items-start gap-2   border-slate-400  py-2 border-b">
              <img
                src="https://assets.website-files.com/629875d8244c28fdb35e6350/62a1ce215ad0e2a3b0a8535c_Rectangle%20179.png"
                width="60px"
                className="rounded-lg"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <div className=" text-sm  ">
                  <span className=" me-3 text-slate-400">08-11-2021</span>
                  <span className="text-slate-400">Category</span>
                </div>
                <h5 className="  font-[600] text-lg">
                  Believing neglected so so allowance existence departure.
                </h5>
              </div>
            </div>
            <div className="flex items-start gap-2   border-slate-400  py-2 border-b">
              <img
                src="https://assets.website-files.com/629875d8244c28fdb35e6350/62a1ce20da86820a3bcff868_Rectangle%20180.png"
                width="60px"
                className="rounded-lg"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <div className=" text-sm  ">
                  <span className=" me-3 text-slate-400">08-11-2021</span>
                  <span className="text-slate-400">Category</span>
                </div>
                <h5 className="  font-[600] text-lg">
                Do believing oh disposing to supported allowance we.</h5>
              </div>
            </div>
            <div className="flex items-start gap-2   border-slate-400  py-2 border-b">
              <img
                src="https://assets.website-files.com/629875d8244c28fdb35e6350/62a1ce20f4890f686e64cfbd_Rectangle%20181.png"
                width="60px"
                className="rounded-lg"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <div className=" text-sm  ">
                  <span className=" me-3 text-slate-400">08-11-2021</span>
                  <span className="text-slate-400">Category</span>
                </div>
                <h5 className="  font-[600] text-lg">
                Village did removed enjoyed explain nor ham saw.</h5>
              </div>
            </div>
            <div className="flex items-start gap-2   border-slate-400  py-2 border-b">
              <img
                src="https://assets.website-files.com/629875d8244c28fdb35e6350/62a1ce20dc4d572441ed4713_Rectangle%20188.png"
                width="60px"
                className="rounded-lg"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <div className=" text-sm  ">
                  <span className=" me-3 text-slate-400">08-11-2021</span>
                  <span className="text-slate-400">Category</span>
                </div>
                <h5 className="  font-[600] text-lg">
                Securing as informed declared or margaret.</h5>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
