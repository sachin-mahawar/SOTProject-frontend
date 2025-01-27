import React, { useState } from "react";
import Header from "../../layouts/header";
import trainImage from "../../assets/train.jpg"; // Ensure the path to your image is correct
import fujiImage from "../../assets/fuji.jpg"; // Ensure the path to your image is correct

const TrainSearch = () => {
  // States for form inputs
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // You can replace this with your API call to fetch train data based on the form values
    console.log(
      "Searching for trains from",
      from,
      "to",
      to,
      "on",
      date,
      "for",
      passengers,
      "passengers"
    );
  };

  return (
    <>
      <Header></Header>
      <div className="font-mono">
        {/* Container */}
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            {/* Row */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              {/* Left Image Section */}
              <div
                className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                style={{
                  backgroundImage: `url(${fujiImage})`, // Image as background
                  backgroundSize: "cover", // Ensures image covers the div
                  backgroundPosition: "center",
                  height: "100%", // Ensure the height fits its parent
                }}
              ></div>

              {/* Right Form Section */}
              <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Train Search</h3>
                <form
                  className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                  onSubmit={handleSearch}
                >
                  {/* From Input */}
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="from"
                    >
                      From
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="from"
                      type="text"
                      placeholder="From"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                    />
                  </div>

                  {/* To Input */}
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="to"
                    >
                      To
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="to"
                      type="text"
                      placeholder="To"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                    />
                  </div>

                  {/* Date Input */}
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="date"
                    >
                      Date
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  {/* Passengers Input */}
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="passengers"
                    >
                      Passengers
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="passengers"
                      type="number"
                      min="1"
                      placeholder="Number of Passengers"
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                    />
                  </div>

                  {/* Search Button */}
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>

                  <hr className="mb-6 border-t" />

                  {/* Optional Links */}
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Create an Account!
                    </a>
                  </div>
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainSearch;
