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
        <div className="w-2/3 left-div">
          <h2 className="w-5/6 ml-20 pt-6 text-lg font-bold mb-4">Detail Pemesan</h2>
          <div className="w-5/6 ml-20 p-4 pt-4 pb-4 bg-white rounded shadow-md">
            <div className="flex items-center justify-between">
              <span>Selesaikan dalam</span>
              <CountdownTimer />
            </div>
          </div>
          {/* ... */}
          <div className="w-5/6 ml-20 p-4 mt-4 pt-4 pb-4 bg-white rounded shadow-md">
            <div className="flex items-center justify-between">
              <p>Metode Pembayaran</p>
            </div>

            <hr className="mt-2"></hr>
            <div className="flex flex-col mt-4">
              <label className="flex items-center mb-2">
                <input type="radio" name="paymentMethod" value="BCA Virtual Account" />
                <Image className="ml-2" src="/bca.png" alt="BCA Logo" width={36} height={24} />
                <span className="ml-2">BCA Virtual Account</span>
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="paymentMethod" value="Mandiri Virtual Account" />
                <Image className="ml-2" src="/mandiri.png" alt="BCA Logo" width={36} height={24} />
                <span className="ml-2">Mandiri Virtual Account</span>
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="paymentMethod" value="BRI Virtual Account" />
                <Image className="ml-2" src="/bri.png" alt="BCA Logo" width={36} height={24} />
                <span className="ml-2">BRI Virtual Account</span>
              </label>
            </div>
          </div>
        </div>

        <div className="right-div w-1/3 mr-40 pt-6 mt-16 bg-white rounded shadow-md border-gray-300 h-1/5">
          <div className="flex ml-6 mb-4">
            <p className="text-gray-700">Order ID : {randomstring}</p>
          </div>
          <hr></hr>
          <div className="text-sm ml-6 mt-2">
            <p className="text-blue-500 font-bold ">Pergi</p>
          </div>
          <li key={flight.id} className=" p-4 mb-4 shadow-sm rounded bg-blue-300 flex text-sm border-1 m-4">
            <div className="flex flex-col mb-4 font-bold justify-center pt-4 ml-10">
              <div className="flex justify-center">
                <p className="text-black">{flight.departureAirport.city}</p>
                <span className="mx-2 "> &#8594;</span>
                <p className="text-black">{flight.arrivalAirport.city}</p>
              </div>
              <div className="text-sm mt-2">
                <span className="text-gray-900">{new Date(flight.departureTime).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span> | {new Date(flight.departureTime).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}</span>
              </div>
            </div>
          </li>
          <hr className="mt-10"></hr>
          <p className="pb-4 flex justify-between mx-4 mt-4">
            <span>Total Pembayaran</span>
            <span className="text-orange-500 font-bold">IDR {flight.ticketPrice.toLocaleString("id-ID")}</span>
          </p>
          <div className="flex justify-center mb-4">
            <Link href={`/paymentdetail/${flight.id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Lanjut Ke Pembayaran</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
