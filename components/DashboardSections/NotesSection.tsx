import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ThemedText as Text } from '../ThemedText';
import { ThemedView as View } from '../ThemedView';

const NotesSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text type="subtitle" style={styles.sectionTitle}>Notes</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <View style={styles.gridContainer}>
        {/* Left Column */}
        <View style={styles.column}>
          <View style={[styles.noteCard, styles.blue]}>
            <Text type='subtitle' style={styles.noteTitle}>🌟 Weekend Getaway Planning 🌟</Text>
            <Text style={styles.noteText}>Quick To-Do for Today:</Text>
            <Text style={styles.noteText}>• Email the client draft proposal 📄</Text>
            <Text style={styles.noteText}>• Review meeting notes from yesterday 📝</Text>
          </View>
        </View>

        {/* Right Column with two stacked cards */}
        <View style={styles.column}>
          <View style={styles.halfCard}>
            <View style={[styles.noteCard, styles.red]}>
              <Text type='subtitle' style={styles.noteTitle}>Recipe Ideas for Book Club</Text>
              <Text style={styles.noteText}>
                Think about including some easy-to-make snacks.
              </Text>
            </View>
          </View>
          <View style={styles.halfCard}>
            <View style={[styles.noteCard, styles.yellow]}>
              <Text style={styles.noteTitle}>Client Feedback - Echo Project</Text>
              <Text style={styles.noteText}>
                Client requested changes to the logo design.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotesSection;

const styles = StyleSheet.create({
  section: {
    marginBottom:30,
    paddingVertical: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: RFValue(16),
  },
  viewAll: {
    fontSize: RFValue(12),
    color: Colors.primary,
  },
  gridContainer: {
    flexDirection: 'row',
    height: 340,
    gap: 12,
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
  },
  halfCard: {
    flex: 1,
  },
  noteCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    paddingBottom:20,
    backgroundColor: Colors.cardBackground,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  noteTitle: {
    fontSize: RFValue(12),
    lineHeight:RFValue(12) * 1.3,
    textAlign: 'center',
    marginBottom: 6,
    color: Colors.textPrimary,
  },
  noteText: {
    fontSize: RFValue(10),
    lineHeight:RFValue(10)* 1.4,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  blue: {
    backgroundColor: Colors.noteBlue,
  },
  red: {
    backgroundColor: Colors.noteRed,
    marginBottom: 6,
  },
  yellow: {
    backgroundColor: Colors.noteYellow,
    marginTop: 6,
  },
});
