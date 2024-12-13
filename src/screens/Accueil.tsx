import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, StatusBar, Dimensions } from 'react-native';
import ItineraryCard from '../components/ItineraryCard';
import { Itinerary } from '../types';

const { width } = Dimensions.get('window');

const dummyItineraries: Itinerary[] = [
  {
    id: '1',
    title: 'Trip to Douala',
    departureTime: '08:00 AM',
    arrivalTime: '12:00 PM',
    destination: 'Douala',
    imagePath: 'https://via.placeholder.com/250', // Remplacer par une URL d'image réelle
  },
  {
    id: '2',
    title: 'Trip to Bafoussam',
    departureTime: '10:00 AM',
    arrivalTime: '02:00 PM',
    destination: 'Bafoussam',
    imagePath: 'https://via.placeholder.com/250', // Remplacer par une URL d'image réelle
  },
  // Ajouter plus d'itinéraires ici
];

const Accueil = ({ navigation }) => {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);

  useEffect(() => {
    // Remplacer cette partie par un appel API réel
    setItineraries(dummyItineraries);
  }, []);

  if (itineraries.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.header}>Available Itineraries</Text>
      <FlatList
        data={itineraries}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ItineraryCard
            id={item.id}
            title={item.title}
            departureTime={item.departureTime}
            arrivalTime={item.arrivalTime}
            destination={item.destination}
            imagePath={item.imagePath}
            onPress={() => navigation.navigate('Reservation', { itineraryId: item.id })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Accueil;
