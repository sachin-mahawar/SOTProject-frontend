import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import trainIcon from "../../assets/train_small.png"; // Ensure the path to your train icon is correct
import passengerIcon from "../../assets/passenger.png"; // Ensure the path to your passenger icon is correct

const PassengerDetails = () => {
  const location = useLocation();
  const { train, passengers } = location.state || {};

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // console.log(train);
  }, [train]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending the data to a server
    console.log("Passenger Details:", { name, age, email });
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      {/* Train Details */}
      {train && (
        <div className="mb-6 p-6 border rounded shadow-lg bg-white">
          <div className="flex items-center mb-4">
            <img src={trainIcon} alt="Train Icon" className="h-12 w-12 mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">Selected Train</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-gray-700">
              <strong>Name:</strong> {train.name}
            </p>
            <p className="text-gray-700">
              <strong>From:</strong> {train.from}
            </p>
            <p className="text-gray-700">
              <strong>To:</strong> {train.to}
            </p>
            <p className="text-gray-700">
              <strong>Departure:</strong> {train.departure}
            </p>
            <p className="text-gray-700">
              <strong>Arrival:</strong> {train.arrival}
            </p>
            <p className="text-gray-700">
              <strong>Duration:</strong> {train.duration}
            </p>
            <p className="text-gray-700">
              <strong>Passengers:</strong> {passengers}
            </p>
          </div>
        </div>
      )}

      {/* Passenger Details Form */}
      <div className="mb-6 p-6 border rounded shadow-lg bg-white">
        <div className="flex items-center mb-4">
          <img
            src={passengerIcon}
            alt="Passenger Icon"
            className="h-12 w-12 mr-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            Passenger Details
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PassengerDetails;
