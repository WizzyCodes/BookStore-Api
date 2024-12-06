const Footer = () => {
  const foDat = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About Us",
    },
    {
      id: 3,
      title: "Book Catalog",
    },
    {
      id: 4,
      title: "Contact",
    },
    {
      id: 5,
      title: "Blog",
    },
    {
      id: 6,
      title: "FAQs",
    },
    {
      id: 7,
      title: "Privacy Policy",
    },
    {
      id: 8,
      title: "Terms of Service",
    },
  ];
  return (
    <footer className="bg-white py-10 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-[200px]">
            <h2 className="text-lg font-semibold text-gray-900">Bookstore</h2>
            <p className="mt-2 text-gray-600 font-medium">
              We are a place where readers can explore a curated selection of
              books and find their next great read.
            </p>
          </div>
          <div className="-ml-64">
            <h2 className="text-lg font-semibold text-gray-900">Explore</h2>
            <ul className="mt-2 space-y-2 text-gray-600 font-medium">
              {foDat.map((el) => (
                <li key={el.id}>{el.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            Copyright &copy; 2024{" "}
            <span className="font-semibold">Bookstore</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
