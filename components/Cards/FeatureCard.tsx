// components/FeatureCard.tsx
import { ThemedText as Text } from "@/components/ThemedText";
import { ThemedView as View } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface FeatureCardProps {
  title: string;
  arrowIcon: any;
  description: React.ReactNode;
  highlight: React.ReactNode;
  image: any;
}

const FeatureCard = ({
  title,
  arrowIcon,
  description,
  highlight,
  image,
}: FeatureCardProps) => {
  return (
    <View style={styles.featureCard}>
      <View style={styles.cardHeader}>
        <Text type="title" style={styles.featureTitle}>
          {title}
        </Text>
        <View style={styles.arrowConatiner}>
          <Image source={arrowIcon} style={styles.arrowUpIcon} />
        </View>
      </View>

      <Text style={styles.featureText}>{description}</Text>

      <View style={styles.bottomConatiner}>
        <View style={{ flex: 1 }}>
          <Text style={styles.highlight}>{highlight}</Text>
        </View>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  arrowConatiner: {
    marginTop: 14,
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 30,
    justifyContent: "center",
  },
  arrowUpIcon: {
    width: 46,
    height: 46,
  },
  featureText: {
    paddingHorizontal: 16,
    fontSize: 12,
    marginVertical: 8,
    color: "#333",
  },
  highlight: {
    paddingLeft: 16,
    fontSize: 12,
    color: "#333",
  },
  image: {
    height: 180,
    width: 180,
    resizeMode: "contain",
  },
  bottomConatiner: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
  },
});

export default FeatureCard;
