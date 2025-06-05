import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const productData = [
  {
    name: 'Onions',
    category: 'Vegetable',
    availability: 'Jan-Mar',
    location: 'Kiawara',
    contact: '0712456789',
  },
  {
    name: 'Cabbages',
    category: 'Vegetable',
    availability: 'April-June',
    location: 'Nyandarua',
    contact: '0113546787',
  },
  {
    name: 'Tomatoes',
    category: 'Vegetable',
    availability: 'Jul-Sep',
    location: 'Makutano',
    contact: '0790342156',
  },
  {
    name: 'Avocados',
    category: 'Fruit',
    availability: 'May & Dec',
    location: 'Gatundu',
    contact: '0789445321',
  },
  {
    name: 'Milk',
    category: 'Drink',
    availability: 'Jan-Dec',
    location: 'Ndumberi',
    contact: '0713467098',
  },
  {
    name: 'Sorghum',
    category: 'Grain',
    availability: 'March & Sep',
    location: 'Machakos',
    contact: '0722396854',
  },
  {
    name: 'Banana',
    category: 'Fruit',
    availability: 'Jan-Dec',
    location: 'Kiambu',
    contact: '0790443322',
  },
  {
    name: 'Mangoes',
    category: 'Fruit',
    availability: 'April & Dec',
    location: 'Embu',
    contact: '0567324590',
  },
];

const ProductCard = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{item.name}</Text>
    <Text>Category: {item.category}</Text>
    <Text>Availability: {item.availability}</Text>
    <Text>Location: {item.location}</Text>
    <Text>Contact: {item.contact}</Text>
  </View>
);

const ProductDetailsPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>KARIBU FARMER</Text>
      <Text style={styles.subHeader}>Post Product Details</Text>
      <FlatList
        data={productData}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={ProductCard}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#eef2f3',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
    color: '#2e7d32',
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#555',
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a237e',
  },
});

export default ProductDetailsPage;
