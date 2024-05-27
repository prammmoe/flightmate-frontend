"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Link from "next/link";

const FlightDetail = () => {
  const { slug } = useParams();
  console.log("Slug: ", slug);
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        const response = await axios.get(`https://hp5znbh8-9000.asse.devtunnels.ms/flights/${slug}`);
        setFlight(response.data);
      };

      fetchData();
    }
  }, [slug]);

  if (!flight) {
    return <div className="flex flex-col min-h-screen bg-blue-100"></div>;
  }

  function calculateFlightDuration(departureTime, arrivalTime) {
    const departure = new Date(departureTime);
    const arrival = new Date(arrivalTime);
    const duration = new Date(arrival - departure);

    const hours = duration.getUTCHours();
    const minutes = duration.getUTCMinutes();

    return `${hours} jam ${minutes} menit`;
  }

  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      <Header />
      <div class="flex p-8 bg-white rounded-lg shadow-md mx-10 my-5 font-bold">
        <p class="text-gray-700">{flight.departureAirport.city}</p>
        <span class="mx-2 "> &#8594;</span>
        <p class="text-gray-700">{flight.arrivalAirport.city}</p>
      </div>
      <div class="p-8 bg-white rounded-lg shadow-md mx-10 mb-4">
        <div>
          <h1 class="text-2xl font-bold mb-4">Detail Penerbangan</h1>
          <div class="flex mb-2">
            <div class="w-2/3">
              <p class="text-gray-900">{new Date(flight.departureTime).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</p>
            </div>
          </div>
        </div>
        <hr></hr>

        <div class="flex my-8 items-center">
          <div class="w-1/4">
            <p class="text-gray-700 font-bold">{new Date(flight.departureTime).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}</p>
          </div>
          <div class="w-2/3 flex">
            <div class="flex flex-row">
              <p class="text-gray-900 mr-2 font-bold">{flight.departureAirport.iataCode}</p>
              <p class="text-gray-700">{flight.departureAirport.name}</p>
            </div>
          </div>
        </div>
        <div class="flex mb-8">
          <div class="w-1/4">
            <p class="text-gray-700"></p>
          </div>
          <div class="w-2/3">
            <p class="text-gray-900">{flight.airlines}</p>
            <div class="flex flex-row text-sm mr-2 font-light">
              <p class="text-gray-900 ">{flight.flightNumber} |</p>
              <p class="text-gray-900 ml-2">{flight.flightClass} |</p>
              <p class="text-gray-900 ml-2">{calculateFlightDuration(flight.departureTime, flight.arrivalTime)}</p>
            </div>
          </div>
        </div>
        <div class="flex mb-10">
          <div class="w-1/4">
            <p class="text-gray-700 font-bold">{new Date(flight.arrivalTime).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}</p>
          </div>
          <div class="w-2/3">
            <div class="flex flex-row">
              <p class="text-gray-900 mr-2 font-bold">{flight.arrivalAirport.iataCode}</p>
              <p class="text-gray-900">{flight.arrivalAirport.name}</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div class="flex my-4">
          <div class="w-1/4">
            <p class="text-gray-700">Harga</p>
          </div>
          <div class="w-2/3">
            <p class="text-orange-500 font-bold">IDR {flight.ticketPrice.toLocaleString("id-ID")}</p>
          </div>
        </div>
        <div class="flex justify-end">
          <Link href={`/booking/${flight.id}`}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Lanjutkan ke Pemesanan</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
