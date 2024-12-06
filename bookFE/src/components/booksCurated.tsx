import SVG4 from "./svg4";
import SVG3 from "./svg3";
import SVG2 from "./svg2";
import SVG1 from "./svg1";

const CuratedBooks = () => {
  return (
    <div className="bg-purple-300 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Discover Our Curated <span className="text-blue-400">Book</span>{" "}
          Collections
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-2xl ">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <SVG4 />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Effortless Book Exploration
                </h3>
                <p className="text-gray-600">
                  Easily browse through our extensive collection of books and
                  find your next read.
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <SVG3 />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Personalized Book Lists
                </h3>
                <p className="text-gray-600">
                  Create tailored book lists to enhance your reading experience
                  and keep track of your favorites.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <SVG2 />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Exclusive Reader Rewards
                </h3>
                <p className="text-gray-600">
                  Join our community to unlock special offers and events for
                  book lovers.
                </p>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <SVG1 />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Reader Reviews and Ratings
                </h3>
                <p className="text-gray-600">
                  Share your thoughts and read what other readers say about our
                  books.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuratedBooks;
