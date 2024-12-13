import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';



const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus Ticket Reservation</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Vous n'avez pas de compte, S'inscrire!</Text>
      </TouchableOpacity>
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
  link: {
    color: 'blue',
    marginTop: 10,
  },
});

export default HomeScreen;
