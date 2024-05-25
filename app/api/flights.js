// api/flights.js
const flights = [
  {
    id: 1,
    airline: "Garuda Indonesia",
    flightNumber: "GA123",
    departure: "Jakarta",
    destination: "Bali",
    departureDate: "2023-03-15",
    departureTime: "10:00",
    arrivalTime: "13:00",
    price: 1500000,
    availableSeats: 10,
    flightClass: "Ekonomi",
  },
  {
    id: 2,
    airline: "Lion Air",
    flightNumber: "LN456",
    departure: "Surabaya",
    destination: "Jakarta",
    departureDate: "2023-03-16",
    departureTime: "14:30",
    arrivalTime: "16:30",
    price: 800000,
    availableSeats: 20,
    flightClass: "Ekonomi",
  },
  {
    id: 3,
    airline: "Citilink",
    flightNumber: "QG789",
    departure: "Bandung",
    destination: "Bali",
    departureDate: "2023-03-17",
    departureTime: "09:00",
    arrivalTime: "12:00",
    price: 1200000,
    availableSeats: 15,
    flightClass: "Ekonomi",
  },
  {
    id: 4,
    airline: "Sriwijaya Air",
    flightNumber: "SJ123",
    departure: "Makassar",
    destination: "Jakarta",
    departureDate: "2023-03-18",
    departureTime: "11:00",
    arrivalTime: "14:00",
    price: 1000000,
    availableSeats: 25,
    flightClass: "Ekonomi",
  },
  {
    id: 5,
    airline: "Batik Air",
    flightNumber: "ID789",
    departure: "Yogyakarta",
    destination: "Bali",
    departureDate: "2023-03-19",
    departureTime: "13:00",
    arrivalTime: "16:00",
    price: 1300000,
    availableSeats: 18,
    flightClass: "Ekonomi",
  },
  {
    id: 6,
    airline: "AirAsia",
    flightNumber: "AK456",
    departure: "Medan",
    destination: "Jakarta",
    departureDate: "2023-03-20",
    departureTime: "15:00",
    arrivalTime: "18:00",
    price: 900000,
    availableSeats: 22,
    flightClass: "Ekonomi",
  },
  {
    id: 7,
    airline: "Garuda Indonesia",
    flightNumber: "GA789",
    departure: "Bali",
    destination: "Surabaya",
    departureDate: "2023-03-21",
    departureTime: "08:00",
    arrivalTime: "11:00",
    price: 1600000,
    availableSeats: 12,
    flightClass: "Ekonomi",
  },
  {
    id: 8,
    airline: "Lion Air",
    flightNumber: "LN123",
    departure: "Jakarta",
    destination: "Bandung",
    departureDate: "2023-03-22",
    departureTime: "12:00",
    arrivalTime: "14:00",
    price: 7500000,
    availableSeats: 28,
    flightClass: "Ekonomi",
  },
  {
    id: 9,
    airline: "Citilink",
    flightNumber: "QG456",
    departure: "Bali",
    destination: "Makassar",
    departureDate: "2023-03-23",
    departureTime: "07:00",
    arrivalTime: "10:00",
    price: 1400000,
    availableSeats: 17,
    flightClass: "Ekonomi",
  },
  {
    id: 10,
    airline: "Sriwijaya Air",
    flightNumber: "SJ789",
    departure: "Jakarta",
    destination: "Yogyakarta",
    departureDate: "2023-03-24",
    departureTime: "16:00",
    arrivalTime: "18:00",
    price: 1100000,
    availableSeats: 23,
    flightClass: "Ekonomi",
  },
  {
    id: 11,
    airline: "Batik Air",
    flightNumber: "ID123",
    departure: "Bali",
    destination: "Medan",
    departureDate: "2023-03-25",
    departureTime: "09:00",
    arrivalTime: "12:00",
    price: 1700000,
    availableSeats: 11,
    flightClass: "Ekonomi",
  },
  {
    id: 12,
    airline: "AirAsia",
    flightNumber: "AK789",
    departure: "Surabaya",
    destination: "Jakarta",
    departureDate: "2023-03-26",
    departureTime: "10:00",
    arrivalTime: "13:00",
    price: 1000000,
    availableSeats: 25,
    flightClass: "Ekonomi",
  },
  {
    id: 13,
    airline: "Garuda Indonesia",
    flightNumber: "GA456",
    departure: "Bandung",
    destination: "Bali",
    departureDate: "2023-03-27",
    departureTime: "11:00",
    arrivalTime: "14:00",
    price: 1800000,
    availableSeats: 9,
    flightClass: "Ekonomi",
  },
  {
    id: 14,
    airline: "Lion Air",
    flightNumber: "LN789",
    departure: "Jakarta",
    destination: "Makassar",
    departureDate: "2023-03-28",
    departureTime: "13:00",
    arrivalTime: "16:00",
    price: 1500000,
    availableSeats: 14,
    flightClass: "Ekonomi",
  },
  {
    id: 15,
    airline: "Citilink",
    flightNumber: "QG123",
    departure: "Bali",
    destination: "Yogyakarta",
    departureDate: "2023-03-29",
    departureTime: "15:00",
    arrivalTime: "18:00",
    price: 1300000,
    availableSeats: 19,
    flightClass: "Ekonomi",
  },
  {
    id: 16,
    airline: "Sriwijaya Air",
    flightNumber: "SJ456",
    departure: "Medan",
    destination: "Surabaya",
    departureDate: "2023-03-30",
    departureTime: "08:00",
    arrivalTime: "11:00",
    price: 2000000,
    availableSeats: 16,
    flightClass: "Ekonomi",
  },
  {
    id: 17,
    airline: "Batik Air",
    flightNumber: "ID789",
    departure: "Jakarta",
    destination: "Bali",
    departureDate: "2023-03-31",
    departureTime: "09:00",
    arrivalTime: "12:00",
    price: 2000000,
    availableSeats: 8,
    flightClass: "Ekonomi",
  },
  {
    id: 18,
    airline: "AirAsia",
    flightNumber: "AK123",
    departure: "Makassar",
    destination: "Jakarta",
    departureDate: "2023-04-01",
    departureTime: "10:00",
    arrivalTime: "13:00",
    price: 1200000,
    availableSeats: 21,
    flightClass: "Ekonomi",
  },
  {
    id: 19,
    airline: "Garuda Indonesia",
    flightNumber: "GA789",
    departure: "Bali",
    destination: "Bandung",
    departureDate: "2023-04-02",
    departureTime: "11:00",
    arrivalTime: "14:00",
    price: 1900000,
    availableSeats: 7,
    flightClass: "Ekonomi",
  },
  {
    id: 20,
    airline: "Lion Air",
    flightNumber: "LN345",
    departure: "Yogyakarta",
    destination: "Surabaya",
    departureDate: "2023-04-03",
    departureTime: "12:00",
    arrivalTime: "15:00",
    price: 1600000,
    availableSeats: 13,
    flightClass: "Ekonomi",
  },
  {
    id: 21,
    airline: "Garuda Indonesia",
    flightNumber: "GA901",
    departure: "Jakarta",
    destination: "Bali",
    departureDate: "2023-03-15",
    departureTime: "10:00",
    arrivalTime: "13:00",
    price: 3000000,
    availableSeats: 5,
    flightClass: "Bisnis",
  },
  {
    id: 22,
    airline: "Lion Air",
    flightNumber: "LN902",
    departure: "Surabaya",
    destination: "Jakarta",
    departureDate: "2023-03-16",
    departureTime: "14:30",
    arrivalTime: "16:30",
    price: 2500000,
    availableSeats: 6,
    flightClass: "Bisnis",
  },
  {
    id: 23,
    airline: "Citilink",
    flightNumber: "QG903",
    departure: "Bandung",
    destination: "Bali",
    departureDate: "2023-03-17",
    departureTime: "09:00",
    arrivalTime: "12:00",
    price: 2800000,
    availableSeats: 4,
    flightClass: "Bisnis",
  },
  {
    id: 24,
    airline: "Sriwijaya Air",
    flightNumber: "SJ904",
    departure: "Makassar",
    destination: "Jakarta",
    departureDate: "2023-03-18",
    departureTime: "11:00",
    arrivalTime: "14:00",
    price: 2200000,
    availableSeats: 7,
    flightClass: "Bisnis",
  },
  {
    id: 25,
    airline: "Batik Air",
    flightNumber: "ID905",
    departure: "Yogyakarta",
    destination: "Bali",
    departureDate: "2023-03-19",
    departureTime: "13:00",
    arrivalTime: "16:00",
    price: 2600000,
    availableSeats: 5,
    flightClass: "Bisnis",
  },
  {
    id: 26,
    airline: "AirAsia",
    flightNumber: "AK906",
    departure: "Medan",
    destination: "Jakarta",
    departureDate: "2023-03-20",
    departureTime: "15:00",
    arrivalTime: "18:00",
    price: 2400000,
    availableSeats: 6,
    flightClass: "Bisnis",
  },
  {
    id: 27,
    airline: "Garuda Indonesia",
    flightNumber: "GA907",
    departure: "Bali",
    destination: "Surabaya",
    departureDate: "2023-03-21",
    departureTime: "08:00",
    arrivalTime: "11:00",
    price: 3000000,
    availableSeats: 5,
    flightClass: "Bisnis",
  },
  {
    id: 28,
    airline: "Lion Air",
    flightNumber: "LN908",
    departure: "Jakarta",
    destination: "Bandung",
    departureDate: "2023-03-22",
    departureTime: "12:00",
    arrivalTime: "14:00",
    price: 2500000,
    availableSeats: 6,
    flightClass: "Bisnis",
  },
  {
    id: 29,
    airline: "Citilink",
    flightNumber: "QG909",
    departure: "Bali",
    destination: "Makassar",
    departureDate: "2023-03-23",
    departureTime: "07:00",
    arrivalTime: "10:00",
    price: 2800000,
    availableSeats: 4,
    flightClass: "Bisnis",
  },
  {
    id: 30,
    airline: "Sriwijaya Air",
    flightNumber: "SJ910",
    departure: "Jakarta",
    destination: "Yogyakarta",
    departureDate: "2023-03-24",
    departureTime: "16:00",
    arrivalTime: "18:00",
    price: 2200000,
    availableSeats: 7,
    flightClass: "Bisnis",
  },

  // Kelas First Class
  {
    id: 31,
    airline: "AirAsia",
    flightNumber: "AK911",
    departure: "Bandung",
    destination: "Jakarta",
    departureDate: "2023-03-16",
    departureTime: "07:00",
    arrivalTime: "10:00",
    price: 6000000,
    availableSeats: 5,
    flightClass: "First Class",
  },
  {
    id: 32,
    airline: "Lion Air",
    flightNumber: "LN912",
    departure: "Jakarta",
    destination: "Medan",
    departureDate: "2023-03-17",
    departureTime: "09:00",
    arrivalTime: "12:00",
    price: 5800000,
    availableSeats: 4,
    flightClass: "First Class",
  },
  {
    id: 33,
    airline: "Citilink",
    flightNumber: "QG913",
    departure: "Yogyakarta",
    destination: "Bali",
    departureDate: "2023-03-18",
    departureTime: "11:00",
    arrivalTime: "14:00",
    price: 5500000,
    availableSeats: 6,
    flightClass: "First Class",
  },
  {
    id: 34,
    airline: "Batik Air",
    flightNumber: "ID914",
    departure: "Surabaya",
    destination: "Bali",
    departureDate: "2023-03-19",
    departureTime: "13:00",
    arrivalTime: "16:00",
    price: 5400000,
    availableSeats: 5,
    flightClass: "First Class",
  },
  {
    id: 35,
    airline: "Garuda Indonesia",
    flightNumber: "GA915",
    departure: "Bali",
    destination: "Jakarta",
    departureDate: "2023-03-20",
    departureTime: "15:00",
    arrivalTime: "18:00",
    price: 5300000,
    availableSeats: 5,
    flightClass: "First Class",
  },
  {
    id: 36,
    airline: "Sriwijaya Air",
    flightNumber: "SJ916",
    departure: "Yogyakarta",
    destination: "Surabaya",
    departureDate: "2023-03-21",
    departureTime: "18:00",
    arrivalTime: "20:00",
    price: 5000000,
    availableSeats: 4,
    flightClass: "First Class",
  },
  {
    id: 37,
    airline: "AirAsia",
    flightNumber: "AK917",
    departure: "Makassar",
    destination: "Bandung",
    departureDate: "2023-03-22",
    departureTime: "10:00",
    arrivalTime: "13:00",
    price: 4500000,
    availableSeats: 7,
    flightClass: "First Class",
  },
  {
    id: 38,
    airline: "Lion Air",
    flightNumber: "LN918",
    departure: "Surabaya",
    destination: "Jakarta",
    departureDate: "2023-03-23",
    departureTime: "16:00",
    arrivalTime: "18:00",
    price: 4800000,
    availableSeats: 6,
    flightClass: "First Class",
  },
];

export { flights };