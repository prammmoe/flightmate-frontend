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
              <p>Instruksi Pembayaran</p>
            </div>

            <hr className="mt-2"></hr>
            <div className="flex flex-col mt-4">
              <p>Transfer</p>
              <label className="flex items-center mb-2">
                <Image className="my-2" src="/mandiri.png" alt="BCA Logo" width={60} height={60} />
                <span className="ml-2">Mandiri Virtual Account</span>
              </label>
              <p className="flex justify-between items-center bg-blue-100 hover:bg-blue-700 text-black font-bold px-6 rounded">
                700 14501 0903 6691
                <span>
                  <Image className="my-2" src="/salin.png" alt="BCA Logo" width={24} height={24} />
                </span>
              </p>
              <p className="mt-4 mb-1">Total Pembayaran</p>
              <p className=" items-center bg-blue-100 hover:bg-blue-700 text-black font-bold px-6 rounded py-2">IDR {flight.ticketPrice.toLocaleString("id-ID")}</p>
              <p className="mt-4 mb-1">Cara Pembayaran</p>
              <div className="flex flex-col border border-black rounded px-4 py-2">
                <p className="flex justify-between items-center cursor-pointer" onClick={() => setShowAtm(!showAtm)}>
                  Transfer Melalui ATM
                  <span>
                    <Image className="my-2" src="/arrow-down.png" alt="arrowdown Logo" width={15} height={15} />
                  </span>
                </p>
                <hr className="border border-black my-2"></hr>
                {showAtm && (
                  <div className="pt-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                    <hr className="border border-black my-2"></hr>
                  </div>
                )}
                <p className="flex justify-between items-center cursor-pointer" onClick={() => setShowLivin(!showLivin)}>
                  Transfer Melalui Livin by Mandiri
                  <span>
                    <Image className="my-2" src="/arrow-down.png" alt="arrowdown Logo" width={15} height={15} />
                  </span>
                </p>
                <hr className="border border-black my-2"></hr>
                {showLivin && (
                  <div className="pt-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                    <hr className="border border-black my-2"></hr>
                  </div>
                )}
                <p className="flex justify-between items-center cursor-pointer" onClick={() => setShowInternet(!showInternet)}>
                  Transfer Melalui Internet Banking
                  <span>
                    <Image className="my-2" src="/arrow-down.png" alt="arrowdown Logo" width={15} height={15} />
                  </span>
                </p>
                <hr className="border border-black my-2"></hr>
                {showInternet && (
                  <div className="pt-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                    <hr className="border border-black my-2"></hr>
                  </div>
                )}
              </div>
              <p className="flex justify-between pt-4">
                <span>
                  <Image className="my-1 mr-4" src="/info.png" alt="arrowdown Logo" width={20} height={20} />
                </span>
                Setelah pembayaran diverifikasi, e-tiket dan bukti pembayaran akan dikirim ke alamat email.
              </p>
              <Link href={`/reservation/${flight.id}`}>
                <button className="flex ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-6 rounded">Lihat Pesanan</button>
              </Link>
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
        </div>
      </div>
    </div>
  );
};

export default Payment;
