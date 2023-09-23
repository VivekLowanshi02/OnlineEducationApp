// ContactScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assest/insta icon.png')} // Replace with your contact's image
        style={styles.contactImage}
      />
      <Text style={styles.contactName}>Vivek Lowanshi</Text>
      <Text style={styles.contactInfo}>Dev.Developer@example.com</Text>
      <Text style={styles.contactInfo}>123-456-7890</Text>

      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  contactImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  contactName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 18,
    marginBottom: 10,
  },
  contactButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  contactButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContactScreen;
