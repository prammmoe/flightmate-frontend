import React, { useState } from "react";
import { flights } from "../api/flights.js";
import DetailFlightModal from "./DetailFlightModal";

const Form = ({ onSearch }) => {
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [passengerCount, setPassengerCount] = useState(1);
  const [flightClass, setFlightClass] = useState("Ekonomi");
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArrowClick = () => {
    // Swap values regardless of emptiness
    const tempDepartureCity = departureCity;
    setDepartureCity(destinationCity);
    setDestinationCity(tempDepartureCity);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    let filteredFlights = flights;

    const departureCityUpper = departureCity.charAt(0).toUpperCase() + departureCity.slice(1);
    const destinationCityUpper = destinationCity.charAt(0).toUpperCase() + destinationCity.slice(1);

    if (departureCityUpper) {
      filteredFlights = filteredFlights.filter((flight) => flight.departure === departureCityUpper);
    }

    if (destinationCityUpper) {
      filteredFlights = filteredFlights.filter((flight) => flight.destination === destinationCityUpper);
    }

    if (departureDate) {
      filteredFlights = filteredFlights.filter((flight) => flight.departureDate === departureDate);
    }

    if (passengerCount > 0) {
      filteredFlights = filteredFlights.filter((flight) => flight.availableSeats >= passengerCount);
    }

    if (flightClass) {
      filteredFlights = filteredFlights.filter((flight) => flight.flightClass === flightClass);
    }

    setFilteredFlights(filteredFlights);
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
    setIsModalOpen(true);
  };

  return (
    <div className="flex-grow flex items-center justify-center mt-0 z-10 ">
      <div className="bg-white p-8 rounded shadow-md w-full ml-10 mr-10">
        <h1 className="text-2xl font-bold mb-4">Sedang Mencari Tiket?</h1>
        <div className="flex mb-2 items-center">
          <input className="rounded border p-2 flex-1 mr-2" placeholder={departureCity || "Dari Mana?"} value={departureCity} onChange={(e) => setDepartureCity(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))} />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500 cursor-pointer" onClick={handleArrowClick}>
            <path stroke="#currentColor" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          <input className="rounded border p-2 flex-1 mr-2" placeholder={destinationCity || "Ke Mana?"} value={destinationCity} onChange={(e) => setDestinationCity(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))} />
          <input className="rounded border p-2 flex-1" type="date" placeholder="Departure Date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </div>
        <select className="rounded border p-2 flex-1" value={passengerCount} onChange={(e) => setPassengerCount(e.target.value)}>
          <option value="1">1 Penumpang</option>
          <option value="2">2 Penumpang</option>
          <option value="3">3 Penumpang</option>
          <option value="4">4 Penumpang</option>
          <option value="5">5 Penumpang</option>
        </select>
        <select className="rounded border p-2 flex-1 ml-3" value={flightClass} onChange={(e) => setFlightClass(e.target.value)}>
          <option value="Ekonomi">Ekonomi</option>
          <option value="Bisnis">Bisnis</option>
          <option value="FirstClass">First Class</option>
        </select>
        <div className="flex justify-end py-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded" onClick={handleSearch}>
            Cari
          </button>
        </div>
        <ul>
          {filteredFlights.map((flight) => (
            <li key={flight.id} className="bg-white shadow-md p-4 mb-4 rounded flex">
              <div className="w-1/4 flex items-center justify-center">
                <div className="flex flex-col">
                  <p className="text-black font-bold text-center">{flight.airline}</p>
                  <p className="text-gray-600 text-center">{new Date(flight.departureDate).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</p>
                </div>
              </div>
              <div className="w-1/4 flex items-center justify-center">
                <div className="flex flex-col">
                  <p className="text-gray-600 text-center">{flight.departureTime}</p>
                  <p className="text-gray-600 text-center">{flight.departure}</p>
                </div>
              </div>

              <div className="w-1/4 flex items-center justify-center">
                <div className="flex flex-col">
                  <p className="text-gray-600 text-center">{flight.arrivalTime}</p>
                  <p className="text-gray-600 text-center">{flight.destination}</p>
                </div>
              </div>
              <div className="w-1/4 flex items-center justify-center">
                <div className="flex flex-col">
                  <p className="text-gray-600">{flight.flightClass}</p>
                  <p className="text-gray-600 mb-2">
                    Harga: <span className="text-orange-500">IDR {flight.price.toLocaleString("id-ID")}</span>
                    /org
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full" onClick={() => handleSelectFlight(flight)}>
                    Pilih
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {isModalOpen && <DetailFlightModal flight={selectedFlight} onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
};

export default Form;
