import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../layouts/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AvailableTrains = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialState = location.state || { from: "", to: "", date: "", passengers: 1, trains: [] };
  const { from, to, date, passengers, trains } = initialState;

  const [searchFrom, setSearchFrom] = useState(from);
  const [searchTo, setSearchTo] = useState(to);
  const [searchDate, setSearchDate] = useState(date);
  const [searchPassengers, setSearchPassengers] = useState(passengers);
  const [searchTrains, setSearchTrains] = useState(trains);

  const handleSearch = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!searchFrom || !searchTo || !searchDate || searchPassengers < 1) {
      if (!searchFrom) toast.error("The 'From' field is required.");
      if (!searchTo) toast.error("The 'To' field is required.");
      if (!searchDate) toast.error("The 'Date' field is required.");
      if (searchPassengers < 1)
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

    setSearchTrains(fetchedTrains);
  };

  const handleBook = (train) => {
    navigate("/passenger-detail", { state: { train } });
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="font-mono">
        {/* Full Width Container for Modify Search Section */}
        <div className="w-full bg-gray-100 p-5 rounded-lg mb-6">
          <div className="container mx-auto">
            <h3 className="pt-4 text-2xl text-center">Modify Search</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSearch}>
              <div className="flex flex-wrap -mx-2">
                {/* From Input */}
                <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="from">
                    From
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="from"
                    type="text"
                    placeholder="From"
                    value={searchFrom}
                    onChange={(e) => setSearchFrom(e.target.value)}
                  />
                </div>

                {/* To Input */}
                <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="to">
                    To
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="to"
                    type="text"
                    placeholder="To"
                    value={searchTo}
                    onChange={(e) => setSearchTo(e.target.value)}
                  />
                </div>

                {/* Date Input */}
                <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="date">
                    Date
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="date"
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                  />
                </div>

                {/* Passengers Input */}
                <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="passengers">
                    Passengers
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="passengers"
                    type="number"
                    min="1"
                    placeholder="Number of Passengers"
                    value={searchPassengers}
                    onChange={(e) => setSearchPassengers(parseInt(e.target.value))}
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="text-center mt-4">
                <button
                  className="w-full md:w-auto px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Available Trains Section */}
        <div className="container mx-auto bg-white p-5 rounded-lg">
          <h3 className="text-2xl text-center mb-6">Available Trains</h3>
          {searchTrains.length > 0 ? (
            searchTrains.map((train) => (
              <div key={train.id} className="mb-4 p-4 border rounded shadow-lg">
                <h4 className="text-xl font-bold mb-2 text-gray-800">{train.name}</h4>
                <div className="flex flex-wrap justify-between mb-2">
                  <div className="flex items-center mb-2 w-1/2">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3M16 7V3M5 11h14m-7 4h.01M12 17h.01M12 21h.01M6 17h.01M6 21h.01M18 17h.01M18 21h.01" />
                    </svg>
                    <p className="text-gray-700">Departure: {train.departure}</p>
                  </div>
                  <div className="flex items-center mb-2 w-1/2">
                    <svg
                      className="w-5 h-5 text-red-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3M16 7V3M5 11h14m-7 4h.01M12 17h.01M12 21h.01M6 17h.01M6 21h.01M18 17h.01M18 21h.01" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3M16 7V3M5 11h14m-7 4h.01M12 17h.01M12 21h.01M6 17h.01M6 21h.01M18 17h.01M18 21h.01" />
                    </svg>
                    <p className="text-gray-700">Duration: {train.duration}</p>
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
            ))
          ) : (
            <p className="text-center text-gray-700">No trains available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AvailableTrains;