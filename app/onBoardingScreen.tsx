import OnboardingSlide from '@/components/Slides/OnboardingSlide';
import { ThemedView as View } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { onboardingSlides } from '@/constants/onboardingSlides';
import React, { useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={onboardingSlides}
        renderItem={({ item }) => (
          <OnboardingSlide
            item={item}
            currentIndex={currentIndex}
            totalSlides={onboardingSlides.length}
            flatListRef={flatListRef}
          />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        onScroll={handleScroll} 
        ref={flatListRef}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
