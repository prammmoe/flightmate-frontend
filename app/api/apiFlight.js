const apiFlight = [
  {
    id: 1,
    flightNumber: "AA1001",
    flightClass: "Ekonomi",
    departureAirportId: 1,
    arrivalAirportId: 2,
    departureTime: "2024-07-01T06:00:00.000Z",
    arrivalTime: "2024-07-01T09:00:00.000Z",
    aircraftId: 1,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 1,
      model: "Boeing 737-800",
      manufacturer: "Boeing",
      seatingCapacity: 189,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 1,
      name: "Los Angeles International Airport",
      city: "Los Angeles",
      country: "United States",
      iataCode: "LAX",
      icaoCode: "KLAX",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 2,
      name: "John F. Kennedy International Airport",
      city: "New York",
      country: "United States",
      iataCode: "JFK",
      icaoCode: "KJFK",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 2,
    flightNumber: "BA2002",
    flightClass: "Ekonomi",
    departureAirportId: 2,
    arrivalAirportId: 3,
    departureTime: "2024-07-01T10:00:00.000Z",
    arrivalTime: "2024-07-01T13:00:00.000Z",
    aircraftId: 2,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 2,
      model: "Airbus A320",
      manufacturer: "Airbus",
      seatingCapacity: 180,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 2,
      name: "John F. Kennedy International Airport",
      city: "New York",
      country: "United States",
      iataCode: "JFK",
      icaoCode: "KJFK",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 3,
      name: "O'Hare International Airport",
      city: "Chicago",
      country: "United States",
      iataCode: "ORD",
      icaoCode: "KORD",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 3,
    flightNumber: "DL3003",
    flightClass: "Ekonomi",
    departureAirportId: 3,
    arrivalAirportId: 4,
    departureTime: "2024-07-02T07:30:00.000Z",
    arrivalTime: "2024-07-02T11:00:00.000Z",
    aircraftId: 3,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 3,
      model: "Boeing 787-9 Dreamliner",
      manufacturer: "Boeing",
      seatingCapacity: 296,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 3,
      name: "O'Hare International Airport",
      city: "Chicago",
      country: "United States",
      iataCode: "ORD",
      icaoCode: "KORD",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 4,
      name: "Heathrow Airport",
      city: "London",
      country: "United Kingdom",
      iataCode: "LHR",
      icaoCode: "EGLL",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 4,
    flightNumber: "UA4004",
    flightClass: "Ekonomi",
    departureAirportId: 4,
    arrivalAirportId: 5,
    departureTime: "2024-07-02T08:00:00.000Z",
    arrivalTime: "2024-07-02T11:30:00.000Z",
    aircraftId: 4,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 4,
      model: "Airbus A350-900",
      manufacturer: "Airbus",
      seatingCapacity: 325,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 4,
      name: "Heathrow Airport",
      city: "London",
      country: "United Kingdom",
      iataCode: "LHR",
      icaoCode: "EGLL",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 5,
      name: "Tokyo International Airport",
      city: "Tokyo",
      country: "Japan",
      iataCode: "HND",
      icaoCode: "RJTT",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 5,
    flightNumber: "AA5005",
    flightClass: "Ekonomi",
    departureAirportId: 5,
    arrivalAirportId: 1,
    departureTime: "2024-07-03T09:00:00.000Z",
    arrivalTime: "2024-07-03T12:00:00.000Z",
    aircraftId: 5,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 5,
      model: "Boeing 777-300ER",
      manufacturer: "Boeing",
      seatingCapacity: 396,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 5,
      name: "Tokyo International Airport",
      city: "Tokyo",
      country: "Japan",
      iataCode: "HND",
      icaoCode: "RJTT",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 1,
      name: "Los Angeles International Airport",
      city: "Los Angeles",
      country: "United States",
      iataCode: "LAX",
      icaoCode: "KLAX",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 6,
    flightNumber: "BA6006",
    flightClass: "Ekonomi",
    departureAirportId: 1,
    arrivalAirportId: 6,
    departureTime: "2024-07-03T12:00:00.000Z",
    arrivalTime: "2024-07-03T15:00:00.000Z",
    aircraftId: 6,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 6,
      model: "Airbus A330-300",
      manufacturer: "Airbus",
      seatingCapacity: 295,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 1,
      name: "Los Angeles International Airport",
      city: "Los Angeles",
      country: "United States",
      iataCode: "LAX",
      icaoCode: "KLAX",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 6,
      name: "Sydney Kingsford Smith Airport",
      city: "Sydney",
      country: "Australia",
      iataCode: "SYD",
      icaoCode: "YSSY",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 7,
    flightNumber: "DL7007",
    flightClass: "Ekonomi",
    departureAirportId: 6,
    arrivalAirportId: 2,
    departureTime: "2024-07-04T06:30:00.000Z",
    arrivalTime: "2024-07-04T10:00:00.000Z",
    aircraftId: 7,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 7,
      model: "Boeing 747-8",
      manufacturer: "Boeing",
      seatingCapacity: 410,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 6,
      name: "Sydney Kingsford Smith Airport",
      city: "Sydney",
      country: "Australia",
      iataCode: "SYD",
      icaoCode: "YSSY",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 2,
      name: "John F. Kennedy International Airport",
      city: "New York",
      country: "United States",
      iataCode: "JFK",
      icaoCode: "KJFK",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 8,
    flightNumber: "UA8008",
    flightClass: "Ekonomi",
    departureAirportId: 2,
    arrivalAirportId: 7,
    departureTime: "2024-07-04T08:00:00.000Z",
    arrivalTime: "2024-07-04T12:30:00.000Z",
    aircraftId: 8,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 8,
      model: "Airbus A380-800",
      manufacturer: "Airbus",
      seatingCapacity: 555,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 2,
      name: "John F. Kennedy International Airport",
      city: "New York",
      country: "United States",
      iataCode: "JFK",
      icaoCode: "KJFK",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 7,
      name: "Dubai International Airport",
      city: "Dubai",
      country: "United Arab Emirates",
      iataCode: "DXB",
      icaoCode: "OMDB",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 9,
    flightNumber: "AA9009",
    flightClass: "Ekonomi",
    departureAirportId: 7,
    arrivalAirportId: 3,
    departureTime: "2024-07-05T09:00:00.000Z",
    arrivalTime: "2024-07-05T13:00:00.000Z",
    aircraftId: 9,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 9,
      model: "Boeing 737 MAX 8",
      manufacturer: "Boeing",
      seatingCapacity: 210,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 7,
      name: "Dubai International Airport",
      city: "Dubai",
      country: "United Arab Emirates",
      iataCode: "DXB",
      icaoCode: "OMDB",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 3,
      name: "O'Hare International Airport",
      city: "Chicago",
      country: "United States",
      iataCode: "ORD",
      icaoCode: "KORD",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 10,
    flightNumber: "BA1010",
    flightClass: "Ekonomi",
    departureAirportId: 3,
    arrivalAirportId: 8,
    departureTime: "2024-07-05T10:00:00.000Z",
    arrivalTime: "2024-07-05T14:00:00.000Z",
    aircraftId: 10,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 10,
      model: "Airbus A321",
      manufacturer: "Airbus",
      seatingCapacity: 220,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 3,
      name: "O'Hare International Airport",
      city: "Chicago",
      country: "United States",
      iataCode: "ORD",
      icaoCode: "KORD",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 8,
      name: "Frankfurt Airport",
      city: "Frankfurt",
      country: "Germany",
      iataCode: "FRA",
      icaoCode: "EDDF",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 11,
    flightNumber: "DL1111",
    flightClass: "Ekonomi",
    departureAirportId: 8,
    arrivalAirportId: 4,
    departureTime: "2024-07-06T07:30:00.000Z",
    arrivalTime: "2024-07-06T11:00:00.000Z",
    aircraftId: 11,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 11,
      model: "Boeing 767-300ER",
      manufacturer: "Boeing",
      seatingCapacity: 218,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 8,
      name: "Frankfurt Airport",
      city: "Frankfurt",
      country: "Germany",
      iataCode: "FRA",
      icaoCode: "EDDF",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 4,
      name: "Heathrow Airport",
      city: "London",
      country: "United Kingdom",
      iataCode: "LHR",
      icaoCode: "EGLL",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 12,
    flightNumber: "UA1212",
    flightClass: "Ekonomi",
    departureAirportId: 4,
    arrivalAirportId: 9,
    departureTime: "2024-07-06T08:00:00.000Z",
    arrivalTime: "2024-07-06T12:30:00.000Z",
    aircraftId: 12,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 12,
      model: "Airbus A319",
      manufacturer: "Airbus",
      seatingCapacity: 156,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 4,
      name: "Heathrow Airport",
      city: "London",
      country: "United Kingdom",
      iataCode: "LHR",
      icaoCode: "EGLL",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 9,
      name: "Hong Kong International Airport",
      city: "Hong Kong",
      country: "Hong Kong",
      iataCode: "HKG",
      icaoCode: "VHHH",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 13,
    flightNumber: "AA1313",
    flightClass: "Ekonomi",
    departureAirportId: 9,
    arrivalAirportId: 5,
    departureTime: "2024-07-07T09:00:00.000Z",
    arrivalTime: "2024-07-07T13:00:00.000Z",
    aircraftId: 13,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 13,
      model: "Boeing 757-200",
      manufacturer: "Boeing",
      seatingCapacity: 239,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 9,
      name: "Hong Kong International Airport",
      city: "Hong Kong",
      country: "Hong Kong",
      iataCode: "HKG",
      icaoCode: "VHHH",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 5,
      name: "Tokyo International Airport",
      city: "Tokyo",
      country: "Japan",
      iataCode: "HND",
      icaoCode: "RJTT",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 14,
    flightNumber: "BA1414",
    flightClass: "Ekonomi",
    departureAirportId: 5,
    arrivalAirportId: 10,
    departureTime: "2024-07-07T12:00:00.000Z",
    arrivalTime: "2024-07-07T15:00:00.000Z",
    aircraftId: 14,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 14,
      model: "Airbus A330-200",
      manufacturer: "Airbus",
      seatingCapacity: 246,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 5,
      name: "Tokyo International Airport",
      city: "Tokyo",
      country: "Japan",
      iataCode: "HND",
      icaoCode: "RJTT",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 10,
      name: "Paris Charles de Gaulle Airport",
      city: "Paris",
      country: "France",
      iataCode: "CDG",
      icaoCode: "LFPG",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 15,
    flightNumber: "DL1515",
    flightClass: "Ekonomi",
    departureAirportId: 10,
    arrivalAirportId: 1,
    departureTime: "2024-07-08T06:30:00.000Z",
    arrivalTime: "2024-07-08T10:00:00.000Z",
    aircraftId: 15,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 15,
      model: "Boeing 737-700",
      manufacturer: "Boeing",
      seatingCapacity: 148,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 10,
      name: "Paris Charles de Gaulle Airport",
      city: "Paris",
      country: "France",
      iataCode: "CDG",
      icaoCode: "LFPG",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 1,
      name: "Los Angeles International Airport",
      city: "Los Angeles",
      country: "United States",
      iataCode: "LAX",
      icaoCode: "KLAX",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 16,
    flightNumber: "UA1616",
    flightClass: "Ekonomi",
    departureAirportId: 1,
    arrivalAirportId: 11,
    departureTime: "2024-07-08T08:00:00.000Z",
    arrivalTime: "2024-07-08T12:30:00.000Z",
    aircraftId: 16,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 16,
      model: "Airbus A220-300",
      manufacturer: "Airbus",
      seatingCapacity: 160,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 1,
      name: "Los Angeles International Airport",
      city: "Los Angeles",
      country: "United States",
      iataCode: "LAX",
      icaoCode: "KLAX",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 11,
      name: "Singapore Changi Airport",
      city: "Singapore",
      country: "Singapore",
      iataCode: "SIN",
      icaoCode: "WSSS",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 17,
    flightNumber: "AA1717",
    flightClass: "Ekonomi",
    departureAirportId: 11,
    arrivalAirportId: 6,
    departureTime: "2024-07-09T09:00:00.000Z",
    arrivalTime: "2024-07-09T13:00:00.000Z",
    aircraftId: 17,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 17,
      model: "Boeing 737 MAX 9",
      manufacturer: "Boeing",
      seatingCapacity: 220,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 11,
      name: "Singapore Changi Airport",
      city: "Singapore",
      country: "Singapore",
      iataCode: "SIN",
      icaoCode: "WSSS",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 6,
      name: "Sydney Kingsford Smith Airport",
      city: "Sydney",
      country: "Australia",
      iataCode: "SYD",
      icaoCode: "YSSY",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 18,
    flightNumber: "BA1818",
    flightClass: "Ekonomi",
    departureAirportId: 6,
    arrivalAirportId: 12,
    departureTime: "2024-07-09T10:00:00.000Z",
    arrivalTime: "2024-07-09T14:00:00.000Z",
    aircraftId: 18,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 18,
      model: "Airbus A321neo",
      manufacturer: "Airbus",
      seatingCapacity: 244,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 6,
      name: "Sydney Kingsford Smith Airport",
      city: "Sydney",
      country: "Australia",
      iataCode: "SYD",
      icaoCode: "YSSY",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 12,
      name: "Amsterdam Schiphol Airport",
      city: "Amsterdam",
      country: "Netherlands",
      iataCode: "AMS",
      icaoCode: "EHAM",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 19,
    flightNumber: "DL1919",
    flightClass: "Ekonomi",
    departureAirportId: 12,
    arrivalAirportId: 7,
    departureTime: "2024-07-10T07:30:00.000Z",
    arrivalTime: "2024-07-10T11:00:00.000Z",
    aircraftId: 19,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 19,
      model: "Boeing 747-400",
      manufacturer: "Boeing",
      seatingCapacity: 416,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 12,
      name: "Amsterdam Schiphol Airport",
      city: "Amsterdam",
      country: "Netherlands",
      iataCode: "AMS",
      icaoCode: "EHAM",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 7,
      name: "Dubai International Airport",
      city: "Dubai",
      country: "United Arab Emirates",
      iataCode: "DXB",
      icaoCode: "OMDB",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
  {
    id: 20,
    flightNumber: "UA2020",
    flightClass: "Ekonomi",
    departureAirportId: 7,
    arrivalAirportId: 13,
    departureTime: "2024-07-10T08:00:00.000Z",
    arrivalTime: "2024-07-10T12:30:00.000Z",
    aircraftId: 20,
    status: "SCHEDULED",
    createdAt: "2024-05-24T07:27:59.773Z",
    updatedAt: "2024-05-24T07:27:59.773Z",
    aircraft: {
      id: 20,
      model: "Airbus A340-600",
      manufacturer: "Airbus",
      seatingCapacity: 379,
      createdAt: "2024-05-24T04:38:33.153Z",
      updated: "2024-05-24T04:38:33.153Z",
    },
    departureAirport: {
      id: 7,
      name: "Dubai International Airport",
      city: "Dubai",
      country: "United Arab Emirates",
      iataCode: "DXB",
      icaoCode: "OMDB",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
    arrivalAirport: {
      id: 13,
      name: "Incheon International Airport",
      city: "Seoul",
      country: "South Korea",
      iataCode: "ICN",
      icaoCode: "RKSI",
      createdAt: "2024-05-24T04:34:01.282Z",
      updatedAt: "2024-05-24T04:34:01.282Z",
    },
  },
];

export { apiFlight };
