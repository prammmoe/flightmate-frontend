"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Link from "next/link";

const Payment = () => {
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

  //   if (!flight) {
  //     return <div className="flex flex-col min-h-screen bg-blue-100">Hello World</div>;
  //   }

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
                <span className="ml-2">BCA Virtual Account</span>
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="paymentMethod" value="Mandiri Virtual Account" />
                <span className="ml-2">Mandiri Virtual Account</span>
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="paymentMethod" value="BRI Virtual Account" />
                <span className="ml-2">BRI Virtual Account</span>
              </label>
            </div>
          </div>
        </div>

        <div className="right-div w-1/3 pb-10 mr-40 pt-6 mt-16 bg-white rounded shadow-md border-gray-300 h-1/5">{/* ... */}</div>
      </div>
    </div>
  );
};

export default Payment;
