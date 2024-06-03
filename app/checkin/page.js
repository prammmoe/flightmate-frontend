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

  // useEffect(() => {
  //   if (slug) {
  //     const fetchData = async () => {
  //       const response = await axios.get(`https://hp5znbh8-9000.asse.devtunnels.ms/flights/${slug}`);
  //       setFlight(response.data);
  //     };

  //     fetchData();
  //   }
  // }, [slug]);

  // useEffect(() => {
  //   if (flight) {
  //     setTimeout(() => {
  //       window.location.href = `/auth/user/login`;
  //     }, 5000);
  //   }
  // }, [flight]); // Empty dependency array

  // if (!flight) {
  //   return <div className="flex flex-col min-h-screen bg-blue-100"></div>;
  // }

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
          <div className="w-5/6 h-full ml-20 p-4 mt-4 pt-4 pb-4 bg-white rounded shadow-md">
            <div className="flex items-center justify-between">
              <p>Masukkan detail penerbangan Anda sesuai dengan kode booking yang tertera pada tiket.</p>
            </div>
            <div className="mt-6 flex flex-wrap justify-evenly">
              <input type="text" name="bookingCode" id="bookingCode" placeholder="Kode Booking" className="w-auto mx-4 pl-3 pr-12 py-2 rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />

              <input type="text" name="name" id="name" placeholder="Nama" className="w-auto mx-4 pl-3 pr-12 py-2 rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />

              <Link
                href={`/checkin/seat/4`}
                className="w-1/5 ml-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <button type="submit" className="w-full h-full">
                  Check In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
