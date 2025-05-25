import { ThemedText as Text } from "@/components/ThemedText";
import { ThemedView as View } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import {
    FontAwesome6,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default function registerScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.languageContainer}>
        <Image
          source={require("@/assets/images/england.png")} // Add your flag image
          style={styles.flagIcon}
          resizeMode="contain"
        />
        <Text style={styles.languageText}>EN</Text>
      </View>
      {/* Language & Logo */}
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/appLogo.png")} // Add your logo image here
          resizeMode="contain"
          style={styles.appLogo}
        />
      </View>

      <Text type="title" style={styles.title}>
        GET STARTED
      </Text>
      <Text style={styles.subtitle}>
        Create your account to sync time zones
      </Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <View style={styles.creadencialsIcon}>
          <MaterialCommunityIcons
            name="email-outline"
            size={RFValue(20)}
            color={Colors.primary}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
        />
      </View>
      <View style={[styles.inputContainer, { marginTop: 50 }]}>
        <View style={styles.creadencialsIcon}>
          <FontAwesome6
            name="user-large"
            size={RFValue(20)}
            color={Colors.primary}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
        />
      </View>

      {/* Password Input */}
      <View
        style={[styles.inputContainer, { marginTop: 50, marginBottom: 16 }]}
      >
        <View style={styles.creadencialsIcon}>
          <MaterialIcons
            name="lock"
            size={RFValue(20)}
            color={Colors.primary}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
      </View>
      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton}>
        <Text type="title" style={styles.signInText}>
          Sign Up
        </Text>
      </TouchableOpacity>

      {/* Sign Up */}

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already have an account with us?</Text>
        <TouchableOpacity onPress={() => router.push("/loginScreen")}>
          <Text style={styles.link}> Sign In!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: "center",
    backgroundColor: Colors.white,
    position: "relative",
  },
  header: {
    alignItems: "center",
  },
  appLogo: {
    width: 260,
    height: 112,
  },
  title: {
    fontSize: RFValue(16),
    textAlign: "center",
    marginHorizontal: 10,
    marginBottom: 16,
  },
  creadencialsIcon: {
    position: "absolute",
    left: -6,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.white,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: RFValue(10),
    textAlign: "center",
    marginBottom: 24,
    color: Colors.black,
  },
  inputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginHorizontal: 36,
    // Shadow for iOS
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 3,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  icon: {
    marginRight: 10,
  },
  input: {
    paddingLeft: 65,
    fontFamily: "PoppinsRegular",
    flex: 1,
    fontSize: RFValue(10),
    color: Colors.black,
  },

  signInButton: {
    marginTop: 49,
    marginHorizontal: 60,
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 14,
    marginBottom: 20,
  },
  signInText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: RFValue(14),
  },

  link: {
    fontSize: RFValue(11),
    color: Colors.primary,
    fontWeight: "700",
  },
  signupText: {
    fontSize: RFValue(12),
    textAlign: "center",
    color: "#333",
  },
  languageContainer: {
    position: "absolute",
    top: 34,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    margin: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
  },
  flagIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  languageText: {
    fontSize: RFValue(14),
    fontWeight: "700",
  },

  line: {
    marginHorizontal: 6,
    flex: 1,
    height: 1,
    backgroundColor: Colors.black,
  },
});
