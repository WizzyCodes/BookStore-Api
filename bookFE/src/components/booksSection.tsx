import React from "react";

const booksSection = () => {
  return (
    <div className="bg-purple-200 py-16 px-8 lg:px-24 mt-10">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left: Images */}
        <div className="relative flex-shrink-0">
          <div className="flex">
            <img
              src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/38f662d1-9287-4829-59b5-96dc8f66a300/public"
              alt="Books"
              className="rounded-xl shadow-lg w-64 h-[45vh] mr-4"
            />
            <img
              src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/a39ff1e5-bd56-4f45-87ec-64faa53c0e00/public"
              alt="Antique Books"
              className="rounded-xl shadow-lg w-64 h-[45vh]"
            />
          </div>
        </div>

        <div className="col-span-2 flex flex-col items-center md:items-start xl:col-span-1 xl:pr-40">
          <h1 className="pb-5 text-center text-2xl font-semibold md:text-left lg:text-4xl xl:text-5xl xl:leading-[60px] text-gray-950">
            Explore Our Collection of Books at Bookstore
          </h1>
          <p className="pb-8 text-center text-lg opacity-60 md:text-left lg:text-xl xl:text-2xl xl:leading-10 text-gray-950">
            Immerse yourself in the world of literature with our diverse
            selection of titles waiting for you.
          </p>
          <p className="inline-block rounded-full -100 px-8 py-5 text-lg  lg:text-xl xl:text-2xl bg-purple-700 text-white">
            <span className="mr-1 font-semibold xl:text-4xl">100+</span>
            <span>Books to Choose From</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default booksSection;
