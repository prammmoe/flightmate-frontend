"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "/app/components/Header";
import Image from "next/image";
import Link from "next/link";

const Payment = () => {
  const { slug, randomstring } = useParams();
  console.log("Slug: ", slug);
  const [flight, setFlight] = useState(null);
  const [showAtm, setShowAtm] = useState(false);
  const [showLivin, setShowLivin] = useState(false);
  const [showInternet, setShowInternet] = useState(false);

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        const response = await axios.get(`https://hp5znbh8-9000.asse.devtunnels.ms/flights/${slug}`);
        setFlight(response.data);
      };

      fetchData();
    }
  }, [slug]);

  // useEffect(() => {
  //   if (flight) {
  //     setTimeout(() => {
  //       window.location.href = `/auth/user/login`;
  //     }, 5000);
  //   }
  // }, [flight]); // Empty dependency array

  if (!flight) {
    return <div className="flex flex-col min-h-screen bg-blue-100"></div>;
  }

  // If flight is not null, render the flight details

  const CountdownTimer = () => {
    const [time, setTime] = useState(3600); // 1 hour in seconds

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }, [time]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      <span className="text-orange-500">
        {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
      </span>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      <Header />
      <div className="right-div ml-10 w-1/3 mr-40 pt-6 mt-16 bg-white rounded shadow-md border-gray-300 h-1/5">
        <div className="flex justify-center mb-4">
          <p className="text-gray-700">{flight.departureAirport.city}</p>
          <span className="mx-2 "> &#8594;</span>
          <p className="text-gray-700">{flight.arrivalAirport.city}</p>
        </div>
        <hr></hr>
        <div className="text-sm ml-6 mt-2">
          <p className="text-gray-900">{new Date(flight.departureTime).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
        <li key={flight.id} className=" p-4 mb-4 shadow-sm rounded flex text-sm border-1 m-4">
          <div className="w-1/4 flex items-center justify-center">
            <div className="flex flex-col">
              <p className="text-black font-bold text-center">{flight.airlines}</p>
            </div>
          </div>
          <div className="flex ml-10 justify-between">
            <div className="w-1/4 flex items-center justify-center">
              <div className="flex flex-col">
                <p className="text-gray-600 text-center">{new Date(flight.departureTime).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}</p>
                <p className="text-gray-600 text-center">{flight.departureAirport.city}</p>
              </div>
            </div>

            <div className="w-1/4 flex items-center justify-center">
              <div className="flex flex-col">
                <p className="text-gray-600 text-center">{new Date(flight.arrivalTime).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}</p>
                <p className="text-gray-600 text-center">{flight.arrivalAirport.city}</p>
              </div>
            </div>
          </div>
        </li>
        <hr className="mt-10"></hr>
        <p className="pb-4 flex flex-col mx-4 mt-4">
          <span>Kode Booking : 0213789742</span>
          <span className=""></span>
          <Link
            href={`/checkin/seat/4`}
            className="w-full ml-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <button type="submit" className="w-full h-full">
              Check In
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Payment;
