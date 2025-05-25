import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const SplashScreen = () => {
    const router = useRouter();
    const { width } = useWindowDimensions();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.languageContainer}>
                <Image
                    source={require('@/assets/images/england.png')} // Add your flag image
                    style={styles.flagIcon}
                    resizeMode="contain"
                />
                <Text style={styles.languageText}>EN</Text>
            </View>

            <View style={styles.logoContainer}>
                <Image
                    source={require('@/assets/images/mainIcon.png')}
                    style={[styles.mainIcon, { width: width * 0.4 }]}
                    resizeMode="contain"
                />
                <Image
                    source={require('@/assets/images/companyNameIcon.png')}
                    style={[styles.companyNameIcon, { width: width * 0.6 }]}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.content}>
                <View style={styles.welcomeContainer}>
                    <Text type='subtitle' style={styles.welcomeText}>Welcome to</Text>
                    <Text type='subtitle' style={styles.welcomeTitle}>ZoneSync</Text>
                </View>
                <Text type='ExtraLightItalic' style={styles.description}>
                    Sign in or join us to manage world clocks, compare timezones to set reminders, and view global events all from one place!
                </Text>
                <TouchableOpacity style={styles.arrowIconContainer} onPress={()=> router.push("/onBoardingScreen")}>
                    <AntDesign name="arrowright" size={RFValue(24)} color={Colors.primary} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    languageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: 46,
        margin: 16,
        paddingVertical:8,
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
        fontWeight: '700',
    },
    logoContainer: {
        flex: 0.6,
        justifyContent: "center",
        alignItems: 'center',
        paddingTop: 20,
    },
    mainIcon: {
        aspectRatio: 140 / 140,
        height: undefined,
    },
    companyNameIcon: {
        aspectRatio: 229 / 92,
        marginLeft:20,
        height: undefined,
    },
    arrowIconContainer: {
        position: 'absolute',
        right: 30,        
        bottom: 60,       
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 22.5,
        backgroundColor: Colors.white, 
    },
    content: {
        flex: 0.5,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        paddingTop: 30,
        position: 'relative',
    },
    welcomeContainer: {
        backgroundColor: Colors.primary,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: RFValue(24),
        color: Colors.white,
        paddingBottom:14,
    },
    welcomeTitle: {
        fontSize: RFValue(24),
        color: Colors.white,
    },
    description: {
        fontSize: RFValue(13),
        color: Colors.white,
        lineHeight: RFValue(20),
    },
});

export default SplashScreen;