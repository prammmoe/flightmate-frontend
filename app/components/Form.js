import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Form = () => {
  const [flights, setFlights] = useState([]);
  const [cities, setCities] = useState([]);
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [flightClass, setFlightClass] = useState("Ekonomi");
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get(
          `https://hp5znbh8-9000.asse.devtunnels.ms/flights`
        );
        setFlights(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCities = async () => {
      try {
        const response = await axios.get(
          `https://hp5znbh8-9000.asse.devtunnels.ms/cities`
        );
        setCities(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlights();
    fetchCities();
  }, []);

  const handleArrowClick = () => {
    const tempDepartureCity = departureCity;
    setDepartureCity(destinationCity);
    setDestinationCity(tempDepartureCity);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setIsSearched(true);
    let filteredFlights = [...flights];

    if (departureCity) {
      filteredFlights = filteredFlights.filter((flight) =>
        flight.departureAirport.city
          .toLowerCase()
          .includes(departureCity.toLowerCase())
      );
    }

    if (destinationCity) {
      filteredFlights = filteredFlights.filter((flight) =>
        flight.arrivalAirport.city
          .toLowerCase()
          .includes(destinationCity.toLowerCase())
      );
    }

    if (departureDate) {
      filteredFlights = filteredFlights.filter((flight) => {
        const flightDate = new Date(flight.departureTime);
        const selectedDate = new Date(departureDate);
        return (
          flightDate.getFullYear() === selectedDate.getFullYear() &&
          flightDate.getMonth() === selectedDate.getMonth() &&
          flightDate.getDate() === selectedDate.getDate()
        );
      });
    }

    if (flightClass) {
      filteredFlights = filteredFlights.filter(
        (flight) => flight.flightClass === flightClass
      );
    }

    setFilteredFlights(filteredFlights);
  };

  const handleClear = () => {
    setDepartureCity("");
    setDestinationCity("");
    setDepartureDate("");
    setFlightClass("Ekonomi");
    setFilteredFlights([]);
    setIsSearched(false);
  };

  return (
    <div className="flex-grow flex items-center justify-center mt-0 mb-5 z-10">
      <div className="bg-white p-10 rounded-2xl shadow-md w-full ml-10 mr-10">
        <h1 className="text-gray-700 text-2xl font-bold mb-6">
          Tentukan Destinasimu!
        </h1>
        <div className="flex mb-2 items-center">
          <div className="relative flex-1 mr-2">
            <input
              type="text"
              value={departureCity}
              onChange={(e) => setDepartureCity(e.target.value)}
              placeholder="Dari Mana?"
              className="text-gray-700 rounded border p-2 w-full"
            />
            {departureCity && (
              <div className="absolute bg-white border rounded w-full max-h-40 overflow-y-auto mt-1 z-10">
                {cities
                  .filter((city) =>
                    city.city
                      .toLowerCase()
                      .includes(departureCity.toLowerCase())
                  )
                  .map((city) => (
                    <div
                      key={city.city}
                      onClick={() => setDepartureCity(city.city)}
                      className="cursor-pointer p-2 hover:bg-sky-200 text-gray-700 hover:text-gray-700"
                    >
                      {city.city}
                    </div>
                  ))}
              </div>
            )}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
            onClick={handleArrowClick}
          >
            <span className="">&#8646;</span>
          </button>
          <div className="relative flex-1 mr-2">
            <input
              type="text"
              value={destinationCity}
              onChange={(e) => setDestinationCity(e.target.value)}
              placeholder="Ke Mana?"
              className="text-gray-700 rounded border p-2 w-full"
            />
            {destinationCity && (
              <div className="absolute bg-white border rounded w-full max-h-40 overflow-y-auto mt-1 z-10">
                {cities
                  .filter((city) =>
                    city.city
                      .toLowerCase()
                      .includes(destinationCity.toLowerCase())
                  )
                  .map((city) => (
                    <div
                      key={city.city}
                      onClick={() => setDestinationCity(city.city)}
                      className="cursor-pointer p-2 hover:bg-sky-200 text-gray-700 hover:text-gray-700"
                    >
                      {city.city}
                    </div>
                  ))}
              </div>
            )}
          </div>
          <input
            className="text-gray-700 rounded border p-2 flex-1"
            type="date"
            placeholder="Departure Date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <select
          className="bg-blue-500 rounded border mt-3 p-2 flex-1 ml-0"
          value={flightClass}
          onChange={(e) => setFlightClass(e.target.value)}
        >
          <option value="Ekonomi">Ekonomi</option>
          <option value="Bisnis">Bisnis</option>
          <option value="FirstClass">First Class</option>
        </select>
        <div className="flex justify-end py-2">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-3 mb-2 rounded"
            onClick={handleClear}
          >
            Hapus
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mb-2 rounded"
            onClick={handleSearch}
          >
            Cari
          </button>
        </div>
        {filteredFlights.length > 0 ? (
          <ul>
            {filteredFlights.map((flight) => (
              <li
                key={flight.id}
                className="bg-white shadow-md p-4 mb-4 rounded flex"
              >
                <div className="w-1/4 flex items-center justify-center">
                  <div className="flex flex-col">
                    <p className="text-black font-bold text-center">
                      {flight.airlines}
                    </p>
                    <p className="text-gray-600 text-center">
                      {new Date(flight.departureTime).toLocaleDateString(
                        "id-ID",
                        { day: "numeric", month: "long", year: "numeric" }
                      )}
                    </p>
                  </div>
                </div>
                <div className="w-1/4 flex items-center justify-center">
                  <div className="flex flex-col">
                    <p className="text-gray-600 text-center">
                      {new Date(flight.departureTime).toLocaleTimeString(
                        "id-ID",
                        { hour: "2-digit", minute: "2-digit" }
                      )}
                    </p>
                    <p className="text-gray-600 text-center">
                      {flight.departureAirport.city}
                    </p>
                  </div>
                </div>

                <div className="w-1/4 flex items-center justify-center">
                  <div className="flex flex-col">
                    <p className="text-gray-600 text-center">
                      {new Date(flight.arrivalTime).toLocaleTimeString(
                        "id-ID",
                        { hour: "2-digit", minute: "2-digit" }
                      )}
                    </p>
                    <p className="text-gray-600 text-center">
                      {flight.arrivalAirport.city}
                    </p>
                  </div>
                </div>
                <div className="w-1/4 flex items-center justify-center">
                  <div className="flex flex-col">
                    <p className="text-gray-600">{flight.flightClass}</p>
                    <p className="text-gray-600 mb-2">
                      Harga:{" "}
                      <span className="text-orange-500">
                        IDR {flight.ticketPrice.toLocaleString("id-ID")}
                      </span>
                      /org
                    </p>
                    <Link
                      href={`/pesan?id=${flight.id}`}
                      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-center"
                    >
                      Pesan Sekarang
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          isSearched && (
            <div className="text-gray-600 text-center mt-5">
              Maaf, tidak ada penerbangan yang ditemukan.
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Form;
