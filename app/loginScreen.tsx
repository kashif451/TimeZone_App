import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default function loginScreen() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.languageContainer}>
                <Image
                    source={require('@/assets/images/england.png')} // Add your flag image
                    style={styles.flagIcon}
                    resizeMode="contain"
                />
                <Text style={styles.languageText}>EN</Text>
            </View>
            {/* Language & Logo */}
            <View style={styles.header}>
                <Image
                    source={require('@/assets/images/appLogo.png')} // Add your logo image here
                    resizeMode="contain"
                    style={styles.appLogo}
                />
            </View>

            <Text type="title" style={styles.title}>LET’S GET SYNCED</Text>
            <Text style={styles.subtitle}>Log in to synchronize your time zones</Text>

            {/* Email Input */}
            <View style={styles.inputContainer}>
                <View style={styles.creadencialsIcon}>
                    <MaterialCommunityIcons name="email-outline" size={RFValue(20)} color={Colors.primary} />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#888"
                />
            </View>

            {/* Password Input */}
            <View style={[styles.inputContainer, { marginTop: 50, marginBottom: 16 }]}>
                <View style={styles.creadencialsIcon}>
                    <MaterialIcons name="lock" size={RFValue(20)} color={Colors.primary} />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={{ marginHorizontal: 36, marginBottom: 10, }} onPress={() => router.push("/forgetPasswordScreen")}>
                <Text type='subtitle' style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity style={styles.signInButton}>
                <Text type='title' style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>

            {/* Guest */}
            <Text style={styles.guestText}>
                Just exploring? <Text type='link' style={[styles.link, { fontWeight: "700" }]}>Continue as a Guest</Text>
            </Text>

            <View style={styles.dividerContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>Or</Text>
                <View style={styles.line} />
            </View>

            {/* Social Buttons */}
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Image
                        source={require('@/assets/images/google.png')} // Add Google icon
                        style={styles.socialIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image
                        source={require('@/assets/images/apple.png')} // Add Apple icon
                        style={styles.socialIcon}
                    />
                </TouchableOpacity>
            </View>
            {/* Sign Up */}
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don’t have an account?</Text>
                <TouchableOpacity onPress={() => router.push("/registerScreen")}>
                    <Text style={styles.link}> Sign Up!</Text>
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
        justifyContent: 'center',
        backgroundColor: Colors.white,
        position: "relative"
    },
    appLogo:{
width:260,
height:112
    },
    header: {
        alignItems: 'center',
    },
    languageSelector: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        fontSize: RFValue(12),
    },
    title: {
        fontSize: RFValue(16),
        textAlign: 'center',
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
        textAlign: 'center',
        marginBottom: 24,
        color: Colors.black,
    },
    inputContainer: {
        position: "relative",
        flexDirection: 'row',
        alignItems: 'center',
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
        flexDirection: 'row',
        justifyContent: 'center',
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
    forgotPassword: {
        textAlign: 'right',
        color: Colors.primary,
        fontSize: RFValue(12),
        marginBottom: 20,
    },
    signInButton: {
        marginHorizontal: 60,
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        borderRadius: 14,
        marginBottom: 20,
    },
    signInText: {
        textAlign: 'center',
        color: Colors.white,
        fontSize: RFValue(14),
    },
    guestText: {
        fontSize: RFValue(11),
        textAlign: 'center',
        marginBottom: 10,
        color: '#333',
    },
    link: {
        fontSize: RFValue(11),
        color: Colors.primary,
        fontWeight: "700"
    },
    orText: {
        textAlign: 'center',
        marginVertical: 10,
        color: '#666',
        fontSize: RFValue(12),
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    socialButton: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        elevation: 2,
    },
    socialIcon: {
        width: 26,
        height: 26,
    },
    signupText: {
        fontSize: RFValue(12),
        alignItems: "center",
        textAlign: 'center',
        color: '#333',
    },
    languageContainer: {
        zIndex:1000,
        position: "absolute",
        top: 34,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
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
        fontWeight: '700',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 60,
    },

    line: {
        marginHorizontal: 6,
        flex: 1,
        height: 1,
        backgroundColor: Colors.black,
    },
});
