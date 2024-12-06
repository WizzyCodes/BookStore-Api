import React from "react";
import BooksSection from "../components/booksSection";
import CuratedBooks from "../components/booksCurated";

const LandingPage = () => {
  return (
    <div className="bg-purple-100 min-h-screen max-w-[100vw]">
      <main className="mt-16 flex flex-col-reverse lg:flex-row items-center px-8 lg:px-24">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-block bg-purple-500 px-4 py-2 rounded-full mb-4">
            <span className="text-blue-100 font-semibold">
              Bookstore Treasures
            </span>
          </div>
          <h1 className="text-[50px] leading-snug font-bold text-gray-950 mb-4">
            Discover Your Next Great Read
          </h1>
          <p className="text-gray-800 mb-6 font-medium">
            Browse through our extensive catalog of books sourced from various
            genres.
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium">
            Explore Our Catalog
          </button>
        </div>
        <div className=" flex justify-center relative w-[700px] pl-20">
          <img
            src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/11633109-24aa-4b6f-8507-489dcbba8b00/public"
            alt="Book and Coffee"
            className="rounded-full object-cover shadow-lg ml-10"
          />

          <div className="absolute bottom-[-30px] right-[-20px] bg-[#7E7775] rounded-2xl shadow-lg p-4 flex items-center px-5 py-10 flex-col  border-[5px] border-white backdrop-blur-3xl mr-10 ">
            <div className="flex -space-x-2 ">
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://media.gettyimages.com/id/2156062809/photo/headshot-closeup-portrait-middle-eastern-israel-businesswoman-business-lady-standing-isolated.jpg?b=1&s=612x612&w=0&k=20&c=mPEqaET5s98W_40DmBTRbYY5z0F-_1YkqdC4TCHJeig="
                alt="User 1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://media.gettyimages.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?b=1&s=612x612&w=0&k=20&c=K1pIuZ-758hZpczvQSLjxvyqeOwy5t5EklPn_ykBHfo="
                alt="User 2"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://media.gettyimages.com/id/1490764451/photo/headshot-portrait-of-confident-handsome-mature-middle-age-businessman-at-office.jpg?b=1&s=612x612&w=0&k=20&c=Oxn1hxRZ43vNbYcRlsKQs0Wa8zT344VOIJfGbd_qMtY="
                alt="User 3"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://media.gettyimages.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?b=1&s=612x612&w=0&k=20&c=F5vG2xwUEubSLCS3NA48cDu9ZnM2_1zraK7gkhGhrCM="
                alt="User 4"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://media.gettyimages.com/id/1450340623/photo/portrait-of-successful-mature-boss-senior-businessman-in-glasses-asian-looking-at-camera-and.jpg?b=1&s=612x612&w=0&k=20&c=_3BHqzEwN7yDJ5o41g1ofHVbEp1NYbcqisUY_Sd1eyA="
                alt="User 5"
              />
            </div>
            <div className="mt-3 ">
              <p className="text-gray-600 font-medium ">
                4,800 Readers' Favorites
              </p>
            </div>
          </div>
        </div>
      </main>
      <div>
        {" "}
        <BooksSection />
      </div>
      <div>
        <CuratedBooks />
      </div>
    </div>
  );
};

export default LandingPage;
