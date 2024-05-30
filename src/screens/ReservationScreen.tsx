import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type ReservationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Reservation'>;
type ReservationScreenRouteProp = RouteProp<RootStackParamList, 'Reservation'>;

type Props = {
  navigation: ReservationScreenNavigationProp;
  route: ReservationScreenRouteProp;
};

const ReservationScreen: React.FC<Props> = ({ route, navigation }) => {
  const { itineraryId } = route.params;
  const [userId] = useState(1); // Assume logged in user ID

  const handleReservation = async () => {
    try {
      const response = await axios.post('http://localhost:3000/reservations/book', { userId, itineraryId });
      Alert.alert('Reservation successful');
      navigation.navigate('Itineraries');
    } catch (error) {
      Alert.alert('Reservation failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Reservation</Text>
      <Button title="Confirm" onPress={handleReservation} />
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
});

export default ReservationScreen;
