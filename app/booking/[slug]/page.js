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
  const [namaPemesan, setNamaPemesan] = useState("");
  const [genderPemesan, setGenderPemesan] = useState("");
  const [namaPenumpang, setNamaPenumpang] = useState("");
  const [genderPenumpang, setGenderPenumpang] = useState("");
  const [bagasi, setBagasi] = useState(0);
  const [biayaBagasi, setBiayaBagasi] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleLanjutBayar = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCekLagi = () => {
    handleCloseModal();
  };

  const handleLanjutBayarModal = () => {
    window.location.href = `/payment/${generateRandomString(5)}`;
  };

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
                <input type="radio" id="tuan" name="title" value="Tuan" checked={genderPemesan === "Tuan"} onChange={(e) => setGenderPemesan(e.target.value)} className="mr-2" />
                <label htmlFor="tuan" className="text-gray-700">
                  Tuan
                </label>
              </div>
              <div>
                <input type="radio" id="nyonya" name="title" value="Nyonya" checked={genderPemesan === "Nyonya"} onChange={(e) => setGenderPemesan(e.target.value)} className="mr-2" />
                <label htmlFor="nyonya" className="text-gray-700">
                  Nyonya
                </label>
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="nama-lengkap-pemesan"
                name="nama-lengkap-pemesan"
                value={namaPemesan}
                onChange={(e) => setNamaPemesan(e.target.value)}
                className="w-full pl-2 py-2 text-gray-700 border border-gray-300 rounded placeholder-gray-400 placeholder-opacity-50"
                placeholder="Nama Lengkap"
              />
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
          <div className="w-5/6 ml-20 p-4 pt-6 pb-8  bg-white roundedshadow-md">
            <div className="flex mb-4">
              <div className="mr-4">
                <input type="radio" id="tuanpenumpang" name="titlePenumpang" value="Tuan" checked={genderPenumpang === "Tuan"} onChange={(e) => setGenderPenumpang(e.target.value)} className="mr-2" />
                <label htmlFor="tuanpenumpang" className="text-gray-700">
                  Tuan
                </label>
              </div>
              <div>
                <input type="radio" id="nyonyapenumpang" name="titlePenumpang" value="Nyonya" checked={genderPenumpang === "Nyonya"} onChange={(e) => setGenderPenumpang(e.target.value)} className="mr-2" />
                <label htmlFor="nyonyapenumpang" className="text-gray-700">
                  Nyonya
                </label>
              </div>
              <div className="flex justify-end ml-auto">
                <input
                  type="checkbox"
                  id="sama-dengan-pemesan"
                  name="sama-dengan-pemesan"
                  className="mr-2"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setNamaPenumpang(namaPemesan);
                      setGenderPenumpang(genderPemesan);
                    } else {
                      setNamaPenumpang("");
                      setGenderPenumpang("");
                    }
                  }}
                />
                <label htmlFor="sama-dengan-pemesan" className="text-gray-700">
                  Sama dengan pemesan
                </label>
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="nama-lengkap-penumpang"
                name="nama-lengkap-penumpang"
                value={namaPenumpang}
                onChange={(e) => setNamaPenumpang(e.target.value)}
                className="w-full pl-2 py-2 text-gray-700 border border-gray-300 rounded placeholder-gray-400 placeholder-opacity-50"
                placeholder="Nama Lengkap"
              />
            </div>
          </div>

          <h2 className="w-5/6 ml-20 pt-6 text-lg font-bold mb-4">Tambah Bagasi</h2>
          <div className="w-5/6 ml-20 p-4 pb-8 mb-4 bg-white rounded shadow-md">
            <p className="pb-4">Tambah bagasi untuk memastikan semua barang bawaanmu muat!</p>
            <div className="mb-4 flex">
              <input
                type="text"
                id="tambah-bagasi"
                name="tambah-bagasi"
                value={bagasi}
                onChange={(e) => {
                  const value = e.target.value;
                  let beratBagasi = 0;
                  if (value !== "") {
                    beratBagasi = parseInt(value);
                    if (beratBagasi > 25) {
                      beratBagasi = 25;
                    }
                  }
                  let biaya = 0;
                  if (beratBagasi <= 0) {
                    biaya = 0;
                  } else if (beratBagasi <= 5) {
                    biaya = 150000;
                  } else if (beratBagasi <= 10) {
                    biaya = 300000;
                  } else if (beratBagasi <= 15) {
                    biaya = 450000;
                  } else if (beratBagasi <= 20) {
                    biaya = 600000;
                  } else if (beratBagasi <= 25) {
                    biaya = 750000;
                  }
                  setBagasi(beratBagasi);
                  setBiayaBagasi(biaya);
                }}
                className="w-full max-w-xs pl-2 py-2 text-gray-700 border border-blue-500 rounded bg-blue-50 placeholder-gray-400 placeholder-opacity-50"
                placeholder="Tambah Bagasi"
              />
              <span className=" ml-4 text-xl text-gray-700">/kg</span>
            </div>
          </div>

          <div className="w-5/6 ml-20 mt-8 p-4 pb-8 mb-4 bg-white rounded shadow-md">
            <p className="pb-4 flex justify-between">
              <span>Total Pembayaran</span>
              <span className="text-black font-bold">IDR {(flight.ticketPrice + biayaBagasi).toLocaleString("id-ID")}</span>
            </p>
            <hr className="font-bold"></hr>
            <div className="mb-4"></div>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" onClick={handleLanjutBayar}>
              Lanjut Bayar
            </button>
          </div>
        </div>

        <div className="right-div w-1/3 mr-40 pt-6 mt-16 bg-white rounded shadow-md border-gray-300 h-1/5">
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
          <p className="pb-4 flex justify-between mx-4 mt-4">
            <span>Total Pembayaran</span>
            <span className="text-orange-500 font-bold">IDR {(flight.ticketPrice + biayaBagasi).toLocaleString("id-ID")}</span>
          </p>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded shadow-md p-4 max-w-md mx-auto">
            <h1 className="text-lg font-bold text-center">Lanjut ke Pembayaran</h1>
            <p className="text-center">Pastikan data kamu sudah benar sebelum melanjutkan ke pembayaran.</p>
            <div className="flex flex-col justify-center mx-20 my-5">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded mb-2 w-full" onClick={handleCekLagi}>
                Cek Lagi
              </button>
              <Link href={`/payment/${flight.id}/${generateRandomString(5)}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded w-full">Lanjut Bayar</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
