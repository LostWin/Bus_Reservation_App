import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [idCardPhoto, setIdCardPhoto] = useState<any>(null);

  const handleSignup = async () => {
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('birthDate', birthDate);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('role', role);
    if (idCardPhoto) {
      const { uri, fileName, type } = idCardPhoto;
      formData.append('idCardPhoto', { uri, name: fileName, type });
    }

    try {
      const response = await axios.post('http://10.0.2.2:3000/auth/signup', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      Alert.alert('Signup successful');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Signup failed', error.message);
    }
  };

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const { uri, fileName, type } = response.assets[0];
        setIdCardPhoto({ uri, fileName, type });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Birth Date (YYYY-MM-DD)"
        value={birthDate}
        onChangeText={setBirthDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Picker
        selectedValue={role}
        style={styles.picker}
        onValueChange={(itemValue) => setRole(itemValue)}
      >
        <Picker.Item label="Client" value="client" />
        <Picker.Item label="Agency" value="agency" />
      </Picker>
      <Button title="Pick an ID Card Photo" onPress={pickImage} />
      {idCardPhoto && <Image source={{ uri: idCardPhoto.uri }} style={{ width: 100, height: 100 }} />}
      <Button title="Signup" onPress={handleSignup} />
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
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  picker: {
    width: '80%',
    height: 50,
    marginBottom: 10,
  },
});

export default SignupScreen;
