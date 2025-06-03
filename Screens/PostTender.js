import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const PostTenderPage = ({ tenderData }) => {
  const {
    tenderDetails,
    tenderResult,
    evaluationSummary,
    documents,
    nextSteps,
    comments,
  } = tenderData;

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Tender Details Recap */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tender Details Recap</Text>
        <Text><Text style={styles.label}>Tender ID:</Text> {tenderDetails.id}</Text>
        <Text><Text style={styles.label}>Title:</Text> {tenderDetails.title}</Text>
        <Text><Text style={styles.label}>Description:</Text> {tenderDetails.description}</Text>
        <Text><Text style={styles.label}>Date Closed:</Text> {tenderDetails.dateClosed}</Text>
        <Text><Text style={styles.label}>Submission Deadline:</Text> {tenderDetails.submissionDeadline}</Text>
      </View>

      {/* Tender Result */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tender Result</Text>
        <Text><Text style={styles.label}>Status:</Text> {tenderResult.status}</Text>
        <Text><Text style={styles.label}>Winning Bidder:</Text> {tenderResult.winningBidder}</Text>
        <Text><Text style={styles.label}>Bid Amount:</Text> {tenderResult.bidAmount}</Text>
        <Text><Text style={styles.label}>Contract Period:</Text> {tenderResult.contractStart} - {tenderResult.contractEnd}</Text>
      </View>

      {/* Evaluation Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Evaluation Summary</Text>
        <Text><Text style={styles.label}>Criteria:</Text> {evaluationSummary.criteria.join(', ')}</Text>
        {evaluationSummary.scores && (
          <Text><Text style={styles.label}>Scores/Remarks:</Text> {evaluationSummary.scores}</Text>
        )}
      </View>

      {/* Documents */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Documents</Text>
        {documents.finalContract && (
          <TouchableOpacity onPress={() => openLink(documents.finalContract)}>
            <Text style={styles.link}>Final Contract</Text>
          </TouchableOpacity>
        )}
        {documents.bidderSubmissions && (
          <TouchableOpacity onPress={() => openLink(documents.bidderSubmissions)}>
            <Text style={styles.link}>Bidder Submissions</Text>
          </TouchableOpacity>
        )}
        {documents.evaluationReports && (
          <TouchableOpacity onPress={() => openLink(documents.evaluationReports)}>
            <Text style={styles.link}>Evaluation Reports</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Next Steps/Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Next Steps / Actions</Text>
        <Text><Text style={styles.label}>Payment Terms:</Text> {nextSteps.paymentTerms}</Text>
        <Text><Text style={styles.label}>Delivery Schedule:</Text> {nextSteps.deliverySchedule}</Text>
        <Text><Text style={styles.label}>Contact Info:</Text> {nextSteps.contactInfo}</Text>
      </View>

      {/* Comments or Notes */}
      {comments && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Comments / Notes</Text>
          <Text>{comments}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#222',
  },
  label: {
    fontWeight: '700',
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});

export default PostTenderPage;
