import React from "react";

const head = [
  {
    id: 1,
    title: "Book Catalog",
  },
  {
    id: 2,
    title: "About",
  },
  {
    id: 3,
    title: "Help",
  },
  {
    id: 4,
    title: "Shopping",
  },

  {
    id: 6,
    button: (
      <button className="bg-violet-700 text-white py-1 px-4 rounded-full">
        Sign Up
      </button>
    ),
  },
];

const Header = () => {
  return (
    <div>
      <header className="w-full px-8 py-4 flex justify-between items-center bg-white ">
        <h1 className="text-2xl font-bold text-black">Bookstore</h1>
        <nav className="flex items-center space-x-6">
          {head.map((el) => (
            <a
              href=""
              className="text-gray-950 hover:text-gray-800 font-semibold"
              key={el.id}
            >
              {el.title}
              {el.button}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Header;
