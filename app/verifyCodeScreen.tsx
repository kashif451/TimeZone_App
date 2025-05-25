import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default function verifyCodeScreen() {
    const router = useRouter();
    const [otp, setOtp] = useState(['', '', '', '']);

    const otpRefs = [
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
    ];

    const handleChange = (index: number, value: string) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);

        if (value && index < 3) {
            otpRefs[index + 1].current?.focus();
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topSection}>
                <Text type='title' style={styles.title}>Verify Code</Text>
                <Text style={styles.subtitle}>
                    Enter the 4-digit code we have sent to your email to verify your account.
                </Text>
            </View>

            <View style={styles.bottomSection}>
                <Text style={styles.label}>Enter your OTP Code</Text>

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={otpRefs[index]}
                            style={styles.otpInput}
                            keyboardType="numeric"
                            maxLength={1}
                            value={digit}
                            onChangeText={(value) => handleChange(index, value)}
                        />
                    ))}
                </View>

                <TouchableOpacity style={styles.verifyButton} onPress={() => router.push('/resetPassword')}>
                    <Text type='title' style={styles.verifyText}>Verify</Text>
                </TouchableOpacity>

                <Text style={styles.resendText}>
                    Didn’t receive the code? <Text style={styles.resendLink}>Resend!</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    topSection: {
        paddingTop:34,
        justifyContent: "flex-end",
        flex: 0.3,
        backgroundColor: Colors.primary,
        padding: 44,
    },
    title: {
        color: Colors.white,
        fontSize: RFValue(16),
        marginBottom: 8,
    },
    subtitle: {
        color: Colors.white,
        fontSize: RFValue(10),
    },
    bottomSection: {
        backgroundColor: Colors.white,
        flex: 1,
        borderTopLeftRadius: 80,
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 30,
    },
    label: {
        width:"77%",
        fontSize: RFValue(14),
        fontWeight: '700',
        textAlign:"left",
        marginBottom: 30,
        color: Colors.black,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 30,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: Colors.black,
        textAlign: 'center',
        fontSize: RFValue(18),
        fontWeight: 'bold',
        color: Colors.primary,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    verifyButton: {
        backgroundColor: Colors.primary,
        width: 200,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
        marginVertical:40,
        paddingVertical: 12,
        paddingHorizontal: 40,
        marginBottom: 16,
    },
    verifyText: {
        color: Colors.white,
        fontSize: RFValue(14),
    },
    resendText: {
        paddingVertical:24,
        fontSize: RFValue(10),
        color: '#333',
    },
    resendLink: {
        color: Colors.primary,
        fontWeight: '700',
    },
});
