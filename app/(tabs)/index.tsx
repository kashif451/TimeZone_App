// DashboardScreen.js
import FeatureCard from "@/components/Cards/FeatureCard";
import NotesSection from "@/components/DashboardSections/NotesSection";
import Header from "@/components/Header/Header";
import { ThemedText as Text } from "@/components/ThemedText";
import { ThemedView as View } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Ionicons";

const index = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <Header />
        {/* Greeting */}
        <View style={styles.userContainer}>
          <Text style={styles.greeting}>Hey </Text>
          <View style={styles.guestConatiner}>
            <Text type="title" style={styles.bold}>
              Guest
            </Text>
            <Image
              source={require("@/assets/images/handicon.png")}
              style={styles.handIcon}
            />
          </View>
        </View>

        {/* Timezone */}
        <View style={styles.timeZoneConatiner}>
          <Text style={styles.subText}>Your Local timezone:</Text>
          <View style={styles.timeZoneWrapper}>
            <Text style={styles.timeZoneText}>BST (UTC +1) |</Text>
            <View style={styles.timeRow}>
              <MaterialIcons
                name="access-time"
                size={20}
                color={Colors.black}
              />
              <Text style={styles.timeText}>08:21 PM</Text>
            </View>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Ionicons
            name="search-sharp"
            size={RFValue(20)}
            color={Colors.black}
          />
          <TextInput
            style={styles.input}
            placeholder="Type any location, city, country"
          />
        </View>

        <View style={styles.divider}></View>

        {/* Favourites */}
        <View style={styles.sectionHeader}>
          <Text type="title" style={styles.sectionTitle}>
            My Favourites
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.favCards}>
          <TouchableOpacity style={styles.addCard}>
            <Icon name="add" size={RFValue(46)} color={Colors.white} />
          </TouchableOpacity>
          <View style={styles.timeCard}>
            <Text>Local Time</Text>
            <Text style={styles.city}>Lahore, Pak</Text>
            <Text style={styles.label}>GMT</Text>
            <View style={styles.divider2}>
              <Text>hello</Text>
            </View>
            <Text type="title" style={styles.time}>3:43 PM</Text>
            <Text style={styles.date}>Jan, 10</Text>
          </View>
        </View>
        <FeatureCard
          title="Get Started with Reminders"
          arrowIcon={require("@/assets/images/solar_arrow-up.png")}
          description={
            <>
              Good news! You can now set customized
              <Text type="title" style={styles.link3}>
                {" "}
                reminders
              </Text>{" "}
              and meeting events by comparing different timezones.
            </>
          }
          highlight={
            <>
              Or, why wait?
              <Text type="title" style={styles.link}>
                {" "}
                Add one
              </Text>{" "}
              now and stay ahead! 🚀
            </>
          }
          image={require("@/assets/images/reminderimg2.png")}
        />

        <FeatureCard
          title="Get Started with Notes"
          arrowIcon={require("@/assets/images/solar_arrow-up.png")}
          description={
            <>
              Quickly note down your ideas or tasks and
              <Text type="title" style={styles.link2}>
                {" "}
                link them to different locations if you wish
              </Text>
            </>
          }
          highlight={
            <>
              Or, start now.
              <Text type="title" style={styles.link}>
                Add a note
              </Text>
              and begin capturing! 💡
            </>
          }
          image={require("@/assets/images/reminderimag3.png")}
        />

        {/* Upcoming Reminders Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text type="subtitle" style={styles.sectionTitle}>
              Upcoming Reminders
            </Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>

          <View style={[styles.reminderCard, styles.purple]}>
            <Text style={styles.reminderText}>Project Sync Call: London</Text>
            <Text style={styles.reminderTime}>8:30 PM</Text>
          </View>

          <View style={[styles.reminderCard, styles.green]}>
            <Text style={styles.reminderText}>Project Sync Call: London</Text>
            <Text style={styles.reminderTime}>8:30 PM</Text>
          </View>
        </View>

        {/* Notes Section */}
        <NotesSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 40,
    paddingBottom: 60,
  },
  arrowConatiner: {
    marginTop: 14,
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 30,
    justifyContent: "center",
  },
  divider2: {
    width: "100%",
    marginVertical: 6,
    height: 1,
    borderBottomWidth: 1,
  },
  bottomConatiner: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
  },

  timeZoneWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 6,
  },
  divider: {
    borderBottomWidth: 1,
    paddingVertical: 16,
    borderBottomColor: Colors.lightGrey,
  },
  timeZoneText: {
    fontSize: 16,
    color: "#333",
  },

  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  timeText: {
    fontSize: 16,
    color: Colors.black,
    marginLeft: 4,
  },

  guestConatiner: {
    paddingLeft: 44,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    marginBottom: 80,
    backgroundColor: Colors.white,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightIcons: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bellIcon: {
    width: 34,
    height: 34,
  },
  mapIcon: {
    width: 44,
    height: 44,
    marginLeft: 4,
  },
  userContainer: {
    paddingHorizontal: 34,
  },
  greeting: {
    fontSize: RFValue(18),
  },
  bold: {
    fontSize: RFValue(16),
  },
  link2: {
    fontSize: RFValue(12),
    color: Colors.primary,
  },
  link3: {
    fontSize: RFValue(12),
  },
  handIcon: {
    width: 48,
    height: 48,
    marginLeft: 4,
  },
  arrowUpIcon: {
    width: 46,
    height: 46,
  },
  subText: {
    color: "#999",
    marginTop: 5,
  },
  timeZone: {
    fontSize: 16,
    marginBottom: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.inputBgColor,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginVertical: 10,
  },
  input: {
    color: Colors.lightGrey,
    fontFamily: "ABeeZee",
    marginLeft: 10,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  favCards: {
    flexDirection: "row",
    gap: 12,
  },
  addCard: {
    width: 150,
    height: 185,
    backgroundColor: Colors.primary,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  timeCard: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 11,
    width: 150,
    height: 185,
    elevation: 4,
  },
  city: {
    fontWeight: "bold",
    fontSize: 16,
  },
  label: {
    color: "#aaa",
  },
  time: {
    fontSize: RFValue(16),
    marginVertical: 4,
  },
  date: {
    color: "#999",
  },
  featureCard: {
    backgroundColor: Colors.white,
    borderRadius: 30,
    borderWidth: 0.4,
    borderColor: Colors.lightGrey,
    marginVertical: 34,
    elevation: 4,
    overflow: "hidden",
  },

  cardHeader: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  featureTitle: {
    fontSize: RFValue(13),
  },
  featureText: {
    paddingHorizontal: 16,
    fontSize: RFValue(12),
    marginVertical: 8,
    color: "#333",
  },
  highlight: {
    paddingLeft: 16,
    fontSize: RFValue(12),
    color: "#333",
  },
  link: {
    fontSize: RFValue(12),
    color: Colors.primary,
  },
  image: {
    height: 180,
    width: 180,
    resizeMode: "contain",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#5A49A6",
    padding: 12,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
  navText: {
    color: Colors.white,
    fontSize: 12,
  },
  timeZoneConatiner: {
    paddingLeft: 20,
    gap: 20,
  },
  section: {
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: RFValue(16),
  },
  viewAll: {
    color: Colors.black,
    fontWeight: "500",
  },
  reminderCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reminderText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  reminderTime: {
    color: "#fff",
    fontWeight: "600",
  },
  purple: {
    backgroundColor: "#7065F0",
  },
  green: {
    backgroundColor: "#3AC76B",
  },
});

export default index;
