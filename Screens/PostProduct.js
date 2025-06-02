// ProductPage.js

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProductPage = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Organic Cherry Tomatoes</Text>

      <Image
        source={{ uri: 'https://example.com/cherry-tomatoes.jpg' }} // Replace with real image URL
        style={styles.productImage}
        resizeMode="cover"
      />

      <Text style={styles.description}>
        Sweet and juicy organic cherry tomatoes, hand-picked daily from our pesticide-free farm.
      </Text>

      <Text style={styles.sectionTitle}>Key Features</Text>
      <View style={styles.bulletList}>
        <Text style={styles.bullet}>• 100% organic, certified</Text>
        <Text style={styles.bullet}>• Grown locally in [region]</Text>
        <Text style={styles.bullet}>• Packed fresh every morning</Text>
        <Text style={styles.bullet}>• Available in 250g, 500g, 1kg packs</Text>
      </View>

      <Text style={styles.sectionTitle}>Price</Text>
      <Text style={styles.infoText}>$3.00 / 250g pack</Text>
      <Text style={styles.subText}>Bulk discounts available</Text>

      <Text style={styles.sectionTitle}>Availability</Text>
      <Text style={styles.infoText}>Harvest season: June–September</Text>
      <Text style={styles.infoText}>Orders open: Monday–Friday</Text>

      <Text style={styles.sectionTitle}>Delivery & Pickup Info</Text>
      <Text style={styles.bullet}>• Free local delivery on orders over $20</Text>
      <Text style={styles.bullet}>• Pickup available at [Farmer’s Market Name], every Saturday</Text>

      <Text style={styles.sectionTitle}>Farmer's Note</Text>
      <Text style={styles.quote}>
        “We grow our tomatoes using traditional, sustainable methods that preserve the health of our soil and community.”
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Order Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 12,
  },
  productImage: {
    width: '100%',
    height: 220,
    borderRadius: 8,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 6,
  },
  bulletList: {
    marginLeft: 12,
  },
  bullet: {
    fontSize: 16,
    marginVertical: 2,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: 'gray',
  },
  quote: {
    fontStyle: 'italic',
    fontSize: 15,
    color: '#555',
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
