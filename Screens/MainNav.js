import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function MainNav({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcome}> Karibu, Farmer!</Text>

      <View style={styles.buttonGrid}>
        <TouchableOpacity 
          style={styles.dashboardButton}
          onPress={() => navigation.navigate('PostProduct')}
        >
          <Text style={styles.buttonIcon}>➕</Text>
          <Text style={styles.buttonLabel}>Post Product</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.dashboardButton}
          onPress={() => navigation.navigate('Marketplace')}
        >
          <Text style={styles.buttonIcon}>🛒</Text>
          <Text style={styles.buttonLabel}>Marketplace</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.dashboardButton}
          onPress={() => navigation.navigate('Tenders')}
        >
          <Text style={styles.buttonIcon}>📄</Text>
          <Text style={styles.buttonLabel}>View Tenders</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.dashboardButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonIcon}>👤</Text>
          <Text style={styles.buttonLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  dashboardButton: {
    width: 140,
    height: 140,
    backgroundColor: '#007AFF',
    margin: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 32,
    color: '#fff',
  },
  buttonLabel: {
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
});
