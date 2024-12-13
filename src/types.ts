export type RootStackParamList = {
  SeatBooking: { PosterImage: string };
  Ticket: {
    seatArray: number[];
    time: string;
    date: number;
    ticketImage: string;
  };
  // Ajoutez d'autres écrans ici
};

  
  export type Itinerary = {
    id: string;
    title: string;
    departureTime: string;
    arrivalTime: string;
    destination: string;
    imagePath: string;
  };

  
  