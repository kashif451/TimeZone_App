import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text, type TextProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

// Define all allowed text types in one place
const textTypes = [
  "default",
  "title",
  "defaultSemiBold",
  "subtitle",
  "ExtraLightItalic",
  "link",
] as const;

type TextType = typeof textTypes[number];

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: TextType;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const fontMap: Record<TextType, string> = {
    default: "PoppinsRegular",
    title: "PoppinsBold",
    defaultSemiBold: "PoppinsSemiBold",
    subtitle: "PoppinsMedium",
    ExtraLightItalic: "PoppinsLightItalic",
    link: "PoppinsRegular",
  };

  const styleMap: Record<TextType, object> = {
    default: styles.default,
    title: styles.title,
    defaultSemiBold: styles.defaultSemiBold,
    subtitle: styles.subtitle,
    ExtraLightItalic: styles.ExtraLightItalic,
    link: styles.link,
  };

  return (
    <Text
      style={[{ color }, styleMap[type], { fontFamily: fontMap[type] }, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: RFValue(12),
    lineHeight: RFValue(12) * 1.5,
  },
  defaultSemiBold: { 
    fontSize: RFValue(14),
    lineHeight: RFValue(14) * 1.5,
  },
  title: {
    fontSize: RFValue(16),
    lineHeight: RFValue(16) * 1.5,
  },
  subtitle: {
    fontSize: RFValue(14),
    lineHeight: RFValue(14) * 1.5,
  },
  ExtraLightItalic: {
    fontSize: RFValue(14),
    fontStyle: "italic",
    fontWeight: "300",
    lineHeight: RFValue(14) * 1.5,
  },
  link: {
    fontSize: RFValue(14),
    lineHeight: RFValue(14) * 1.5,
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});
