export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Signup: undefined;
    Itineraries: undefined;
    Reservation: { itineraryId: number };
  };
  
  export interface Itinerary {
    id: number;
    departureTime: string; // Change to string if you're using ISO date strings
    arrivalTime: string;
    destination: string;
    driverName: string;
  }
  