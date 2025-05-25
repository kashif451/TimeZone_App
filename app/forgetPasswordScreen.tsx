import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default function forgetPasswordScreen() {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <View style={styles.header}>
                <Ionicons
                    name="arrow-back"
                    size={RFValue(28)}
                    color={Colors.black}
                    onPress={() => router.back()}
                />
            </View>
            <View style={styles.container}>
                <Text type="title" style={styles.title}>Forgot Password?</Text>
                <Text style={styles.subtitle}>Enter your email to receive a password reset code.</Text>
                <Image source={require('@/assets/images/forgetPasswordIcon.png')} // Add your logo image here
                    resizeMode="contain" 
                    style={styles.image}/>
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

                <TouchableOpacity style={styles.sendCodeButton} onPress={() => router.push('/verifyCodeScreen')}>
                    <Text type='title' style={styles.sendCodText}>Code Send</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 48,
        paddingBottom: 20,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: Colors.white,
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
        backgroundColor: Colors.white,

    },
    input: {
        paddingLeft: 65,
        fontFamily: "PoppinsRegular",
        flex: 1,
        fontSize: RFValue(10),
        color: Colors.black,
    },
    title: {
        fontSize: RFValue(16),
        textAlign: 'center',
        marginHorizontal: 10,
        marginBottom: 16,

    },
    subtitle: {
        fontSize: RFValue(10),
        textAlign: 'center',
        marginBottom: 24,
        color: Colors.black,
    },
    inputContainer: {
        marginVertical: 60,
        position: "relative",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 4,
        // marginHorizontal: 36,
        // Shadow for iOS
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Shadow for Android
        elevation: 3,
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
    sendCodeButton: {
        width: 250,
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        borderRadius: 14,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
 width:240,
 height:240
    },
    sendCodText: {
        textAlign: 'center',
        color: Colors.white,
        fontSize: RFValue(14),
    },
});
