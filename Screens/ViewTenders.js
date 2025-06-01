import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TenderDetailsScreen = () => {
  const handleDocumentDownload = (filename) => {
    // Replace with actual document URL logic
    Linking.openURL(`https://yourserver.com/docs/${filename}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🌾 Farmers Project - Tender Details</Text>

      {/* Tender Info */}
      <View style={styles.section}>
        <Text style={styles.label}>Tender Title:</Text>
        <Text style={styles.content}>Supply of Organic Fertilizers to Community Farms – Zone A</Text>

        <Text style={styles.label}>Tender ID:</Text>
        <Text style={styles.content}>FP-TND-2025-0012</Text>

        <Text style={styles.label}>Published Date:</Text>
        <Text style={styles.content}>01/06/2025</Text>

        <Text style={styles.label}>Closing Date:</Text>
        <Text style={styles.content}>15/06/2025</Text>

        <Text style={styles.label}>Category:</Text>
        <Text style={styles.content}>Fertilizer</Text>

        <Text style={styles.label}>Tender Description:</Text>
        <Text style={styles.content}>
          - Purpose: Supply organic fertilizers{'\n'}
          - Scope: Deliver to 500 farmers in Zone A{'\n'}
          - Quantity: 10 tons, high-quality certified{'\n'}
          - Delivery: Within 30 days of contract award
        </Text>
      </View>

      {/* Documents */}
      <Divider />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📂 Tender Documents</Text>
        {['ToR.pdf', 'Tender_Form.docx', 'Tech_Specs.xlsx'].map(doc => (
          <TouchableOpacity key={doc} onPress={() => handleDocumentDownload(doc)}>
            <Text style={styles.link}>• {doc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Financial Info */}
      <Divider />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💰 Financial Information</Text>
        <Text>• Estimated Budget: USD 25,000</Text>
        <Text>• Funding Source: NGO</Text>
        <Text>• Payment Terms: 50% advance, 50% on delivery</Text>
      </View>

      {/* Eligibility */}
      <Divider />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📋 Eligibility Criteria</Text>
        <Text>• Valid supplier license</Text>
        <Text>• 3+ years in similar projects</Text>
        <Text>• References from past clients</Text>
        <Text>• Local presence preferred</Text>
      </View>

      {/* How to Apply */}
      <Divider />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✅ How to Apply</Text>
        <Text>Submission Deadline: 15/06/2025 – 17:00</Text>
        <Text>
          Submit all documents via email to{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('mailto:procurement@farmersproject.org')}>
            procurement@farmersproject.org
          </Text>
        </Text>
      </View>

      {/* Contact */}
      <Divider />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📞 Contact Information</Text>
        <Text>• Procurement Officer: Mr. John Okello</Text>
        <Text>• Phone: +123 456 789</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('mailto:tenders@farmersproject.org')}
        >
          • Email: tenders@farmersproject.org
        </Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2a5934',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 8,
    color: '#3a3a3a',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  content: {
    marginBottom: 4,
    fontSize: 15,
  },
  link: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
    marginVertical: 4,
  },
});

export default TenderDetailsScreen;
