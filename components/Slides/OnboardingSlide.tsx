import { ThemedText as Text } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');

export default function OnboardingSlide({
    item,
    currentIndex,
    totalSlides,
    flatListRef,
}: any) {
    const router = useRouter();
    const handleNext = () => {
        if (flatListRef?.current && currentIndex < totalSlides - 1) {
            flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        }
    };

    const handleSkip = () => {
        if (flatListRef?.current) {
            flatListRef.current.scrollToIndex({ index: totalSlides - 1 });
        }
    };

    return (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <Text type="title" style={styles.title}>
                {item.title}
            </Text>
            <Text style={styles.description}>{item.description}</Text>

            <View style={styles.dotsContainer}>
                {Array.from({ length: totalSlides }).map((_, i) => (
                    <View
                        key={i}
                        style={[styles.dot, currentIndex === i && styles.activeDot]}
                    />
                ))}
            </View>

            <View style={styles.bottomContainer}>
                {currentIndex === totalSlides - 1 ? (
                    <TouchableOpacity style={styles.getStartedButton} onPress={()=> router.push("/loginScreen") }>
                        <Text type="title" style={styles.getStartedText}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.skipNextContainer}>
                        <Text type="title" style={styles.skipText} onPress={handleSkip}>
                            Skip
                        </Text>
                        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                            <AntDesign
                                name="arrowright"
                                size={RFValue(24)}
                                color={Colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    slide: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        position: 'relative',
    },
    image: {
        width: width * 0.8,
        height: width * 0.8,
        marginTop: 50,
    },
    title: {
        fontSize: RFValue(16),
        textAlign: 'center',
        marginTop: 20,
    },
    description: {
        fontSize: RFValue(12),
        textAlign: 'center',
        marginTop: 10,
        color: '#666',
        paddingHorizontal: 20,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 16,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 6,
    },
    activeDot: {
        width: 60,
        backgroundColor: '#4E55A1',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 30,
    },
    skipNextContainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    skipText: {
        fontSize: RFValue(14),
        color: Colors.black,
    },
    nextButton: {
        backgroundColor: Colors.primary,
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    getStartedButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 14,
        alignSelf: 'flex-end',
    },
    getStartedText: {
        fontSize: RFValue(14),
        color: Colors.white,
        textAlign: 'center',
    },
});
