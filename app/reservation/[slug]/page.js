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

  useEffect(() => {
    if (flight) {
      setTimeout(() => {
        window.location.href = `/checkin`;
      }, 5000);
    }
  }, [flight]); // Empty dependency array

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
      <div className="flex justify-between">
        <div className="w-full left-div">
          <div className="w-5/6 ml-20 p-4 pt-4 my-8 pb-4 bg-white rounded shadow-md">
            <div className="flex items-center justify-between font-bold">
              <span>Tiket Saya</span>
            </div>
          </div>
          {/* ... */}
          <div className="w-5/6 ml-20 p-4 mt-4 pt-4 pb-4 bg-white rounded shadow-md">
            <div className="flex items-center justify-between">
              <p>Order ID : </p>
            </div>

            <hr className="mt-2"></hr>
            <li key={flight.id} className=" mb-4 rounded flex text-sm">
              <div className="flex flex-col justify-center pt-4 ml-5">
                <div className="flex font-bold">
                  <p className="text-black">{flight.departureAirport.city}</p>
                  <span className="mx-2 "> &#8594;</span>
                  <p className="text-black">{flight.arrivalAirport.city}</p>
                </div>
                <div className="text-sm mt-2">
                  <span className="text-gray-900">{new Date(flight.departureTime).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</span>
                  <span> - {new Date(flight.departureTime).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}</span>
                  <span className="text-gray-900"> | {new Date(flight.arrivalTime).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</span>
                  <span> - {new Date(flight.arrivalTime).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}</span>
                </div>
              </div>
            </li>
            <span className="mx-5 bg-green-100 p-2 rounded">E-tiket sudah terbit</span>
            <p className="flex items-center pt-4">
              <span>
                <Image className="ml-5 mr-1" src="/info.png" alt="arrowdown Logo" width={15} height={15} />
              </span>
              Cek email Anda untuk mencetak e-tiket
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
