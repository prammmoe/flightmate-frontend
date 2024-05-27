"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Link from "next/link";

const BookingPage = () => {
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

  function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      <Header />

      <div className="flex justify-between">
        <div className="w-2/3 left-div">
          <h2 className="w-5/6 ml-20 pt-6 text-lg font-bold mb-4">Detail Pemesan</h2>
          <div className="w-5/6 ml-20 p-4 pt-6 pb-8 bg-white rounded shadow-md">
            <div className="flex mb-4">
              <div className="mr-4">
                <input type="radio" id="tuan" name="title" value="Tuan" className="mr-2" />
                <label for="tuan" className="text-gray-700">
                  Tuan
                </label>
              </div>
              <div>
                <input type="radio" id="nyonya" name="title" value="Nyonya" className="mr-2" />
                <label for="nyonya" className="text-gray-700">
                  Nyonya
                </label>
              </div>
            </div>
            <div className="mb-4">
              <input type="text" id="nama-lengkap" name="nama-lengkap" className="w-full pl-2 py-2 text-gray-700 border border-gray-300 rounded placeholder-gray-400 placeholder-opacity-50" placeholder="Nama Lengkap" />
            </div>
            <div className="mb-4">
              <input type="tel" id="nomor-hp" name="nomor-hp" className="w-full pl-2 py-2 text-gray-700 border border-gray-300 rounded placeholder-gray-400 placeholder-opacity-50" placeholder="Nomor HP" />
            </div>
            <div className="mb-4">
              <input type="email" id="alamat-email" name="alamat-email" className="w-full pl-2 py-2 text-gray-700 border border-gray-300 rounded placeholder-gray-400 placeholder-opacity-50" placeholder="Alamat Email" />
            </div>
          </div>
          {/* // Detail Penumpang */}
          <h2 className="w-5/6 ml-20 pt-6 text-lg font-bold mb-4">Detail Penumpang</h2>
          <div className="w-5/6 ml-20 p-4 pt-6 pb-8  bg-white rounded shadow-md">
            <div className="flex mb-4">
              <div className="mr-4">
                <input type="radio" id="tuanpenumpang" name="title" value="Tuan" className="mr-2" />
                <label for="tuanpenumpang" className="text-gray-700">
                  Tuan
                </label>
              </div>
              <div>
                <input type="radio" id="nyonyapenumpang" name="title" value="Nyonya" className="mr-2" />
                <label for="nyonyapenumpang" className="text-gray-700">
                  Nyonya
                </label>
              </div>
              <div className="flex justify-end ml-auto">
                <input type="checkbox" id="sama-dengan-pemesan" name="sama-dengan-pemesan" className="mr-2" />
                <label for="sama-dengan-pemesan" className="text-gray-700">
                  Sama dengan pemesan
                </label>
              </div>
            </div>
            <div className="mb-4">
              <input type="text" id="nama-lengkap" name="nama-lengkap" className="w-full pl-2 py-2 text-gray-700 border border-gray-300 rounded placeholder-gray-400 placeholder-opacity-50" placeholder="Nama Lengkap" />
            </div>
          </div>

          <h2 className="w-5/6 ml-20 pt-6 text-lg font-bold mb-4">Tambah Bagasi</h2>
          <div className="w-5/6 ml-20 p-4 pb-8 mb-4 bg-white rounded shadow-md">
            <p className="pb-4">Tambah bagasi untuk memastikan semua barang bawaanmu muat!</p>
            <div className="mb-4">
              <input type="text" id="tambah-bagasi" name="tambah-bagasi" className="w-full pl-2 py-2 text-gray-700 border border-blue-500 rounded bg-blue-50 placeholder-gray-400 placeholder-opacity-50" placeholder="Tambah Bagasi" />
            </div>
          </div>

          <div className="w-5/6 ml-20 mt-8 p-4 pb-8 mb-4 bg-white rounded shadow-md">
            <p className="pb-4">Total Pembayaran</p>
            <hr className="font-bold"></hr>
            <div className="mb-4"></div>
            <Link href={`/payment/$${generateRandomString(5)}`}>
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Lanjut Bayar</button>
            </Link>
          </div>
        </div>

        <div className="right-div w-1/3 pb-10 mr-40 pt-6 mt-16 bg-white rounded shadow-md border-gray-300 h-1/5">
          <div class="flex justify-center mb-4">
            <p class="text-gray-700">{flight.departureAirport.city}</p>
            <span class="mx-2 "> &#8594;</span>
            <p class="text-gray-700">{flight.arrivalAirport.city}</p>
          </div>
          <hr></hr>
          <div class="text-sm ml-6 mt-2">
            <p class="text-gray-900">{new Date(flight.departureTime).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</p>
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
          <p className="ml-4 mt-5">Total Pembayaran</p>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
