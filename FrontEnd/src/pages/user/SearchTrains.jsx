import React, { useState } from "react";
import Header from "../../layouts/header";
import fujiImage from "../../assets/fuji.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const TrainSearch = () => {
  const navigate = useNavigate();

  // States for form inputs
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  // State for search results
  const [trains, setTrains] = useState([]);

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!from || !to || !date || passengers < 1) {
      if (!from)
        toast.error("The 'From' field is required."), console.log("avadv");
      if (!to) toast.error("The 'To' field is required.");
      if (!date) toast.error("The 'Date' field is required.");
      if (passengers < 1)
        toast.error("The number of passengers must be at least 1.");
      return;
    }

    // Simulate fetching train data
    const fetchedTrains = [
      {
        id: 1,
        name: "Express Train",
        from: "City A",
        to: "City B",
        departure: "08:00 AM",
        arrival: "12:00 PM",
        duration: "4h",
      },
      {
        id: 2,
        name: "Superfast Train",
        from: "City A",
        to: "City B",
        departure: "10:00 AM",
        arrival: "02:00 PM",
        duration: "4h",
      },
    ];

    setTrains(fetchedTrains);
  };

  // Handle booking
  const handleBook = (train) => {
    navigate("/passenger-detail", { state: { train } });
  };

  return (
    <>
      <Header />
      <ToastContainer />
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
              <div className="w-full lg:w-1/2 bg-gray-100 p-5 rounded-lg lg:rounded-l-none">
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
                      onChange={(e) => setPassengers(parseInt(e.target.value))}
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
                </form>
              </div>
            </div>
          </div>

          {/* Train Results */}
          {trains.length > 0 && (
            <div className="w-full xl:w-3/4 lg:w-11/12 mx-auto">
              <h3 className="text-xl mb-4">Available Trains</h3>
              {trains.map((train) => (
                <div
                  key={train.id}
                  className="mb-4 p-4 border rounded shadow-lg bg-white"
                >
                  <h4 className="text-xl font-bold mb-2 text-gray-800">
                    {train.name}
                  </h4>
                  <div className="flex flex-wrap justify-between mb-2">
                    <div className="flex items-center mb-2 w-1/2">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-gray-700">From: {train.from}</p>
                    </div>
                    <div className="flex items-center mb-2 w-1/2">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-gray-700">To: {train.to}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between mb-2">
                    <div className="flex items-center mb-2 w-1/2">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3M16 7V3M5 11h14m-7 4h.01M12 17h.01M12 21h.01M6 17h.01M6 21h.01M18 17h.01M18 21h.01"
                        />
                      </svg>
                      <p className="text-gray-700">
                        Departure: {train.departure}
                      </p>
                    </div>
                    <div className="flex items-center mb-2 w-1/2">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3M16 7V3M5 11h14m-7 4h.01M12 17h.01M12 21h.01M6 17h.01M6 21h.01M18 17h.01M18 21h.01"
                        />
                      </svg>
                      <p className="text-gray-700">Arrival: {train.arrival}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between mb-4">
                    <div className="flex items-center w-1/2">
                      <svg
                        className="w-5 h-5 text-purple-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3M16 7V3M5 11h14m-7 4h.01M12 17h.01M12 21h.01M6 17h.01M6 21h.01M18 17h.01M18 21h.01"
                        />
                      </svg>
                      <p className="text-gray-700">
                        Duration: {train.duration}
                      </p>
                    </div>
                    <div className="flex items-center w-1/2 justify-end">
                      <button
                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        onClick={() => handleBook(train)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TrainSearch;
