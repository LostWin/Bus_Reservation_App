import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import TabNavigator from '../screens/TabNavigator';
import AgencyScreen from '../screens/AgencyScreen'
import Accueil from '../screens/Accueil';
import TicketScreen from '../screens/TicketScreen';
import ReservationScreen from '../screens/ReservationScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Agency" component={AgencyScreen} />
      <Stack.Screen name="Accueil" component={Accueil} />
      <Stack.Screen name="Ticket" component={TicketScreen} />
      <Stack.Screen name="Reservation" component={ReservationScreen} />


    </Stack.Navigator>
  );
}
