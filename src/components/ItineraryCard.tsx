import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Itinerary } from '../types';

type ItineraryCardProps = Itinerary & {
  onPress: () => void;
};

const ItineraryCard: React.FC<ItineraryCardProps> = ({ id, title, departureTime, arrivalTime, destination, imagePath, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imagePath }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.details}>Departure: {departureTime}</Text>
        <Text style={styles.details}>Arrival: {arrivalTime}</Text>
        <Text style={styles.details}>Destination: {destination}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    marginVertical: 2,
  },
});

export default ItineraryCard;
