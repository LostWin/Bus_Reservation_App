import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, Itinerary } from '../types';

type ItineraryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Itineraries'>;
type ItineraryScreenRouteProp = RouteProp<RootStackParamList, 'Itineraries'>;

type Props = {
  navigation: ItineraryScreenNavigationProp;
  route: ItineraryScreenRouteProp;
};

const ItineraryScreen: React.FC<Props> = ({ navigation }) => {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const response = await axios.get('http://localhost:3000/itineraries/all');
        setItineraries(response.data.itineraries);
      } catch (error) {
        Alert.alert('Failed to fetch itineraries');
      }
    };

    fetchItineraries();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Itineraries</Text>
      <FlatList
        data={itineraries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Destination: {item.destination}</Text>
            <Text>Departure: {item.departureTime}</Text>
            <Text>Arrival: {item.arrivalTime}</Text>
            <Text>Driver: {item.driverName}</Text>
            <Button title="Reserve" onPress={() => navigation.navigate('Reservation', { itineraryId: item.id })} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default ItineraryScreen;
