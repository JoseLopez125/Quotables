import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './index'; // Assuming you have defined types for your navigation stack

type MoodScreenRouteProp = RouteProp<RootStackParamList, 'MoodScreen'>;

type Props = {
  route: MoodScreenRouteProp;
};

type CarouselItem = {
  image: any;
};

// Helper function to import images for each mood
const getCarouselItemsForMood = (mood: string): CarouselItem[] => {
  const moodImages: Record<string, any[]> = {
    // Happy: [
    //     require('../assets/test_images/Happy1.png'),
    //     require('../assets/test_images/Happy2.png'),
    //     require('../assets/test_images/Happy3.png'),
    //     require('../assets/test_images/Happy4.png'),
    //     require('../assets/test_images/Happy5.png'),
    //     require('../assets/test_images/Happy6.png'),
    //     require('../assets/test_images/Happy7.png'),
    //     require('../assets/test_images/Happy8.png'),
    //     require('../assets/test_images/Happy9.png'),
    //     require('../assets/test_images/Happy10.png'),
    //   ],
    //   Angry: [
    //     require('../assets/test_images/Angry1.png'),
    //     require('../assets/test_images/Angry2.png'),
    //     require('../assets/test_images/Angry3.png'),
    //     require('../assets/test_images/Angry4.png'),
    //     require('../assets/test_images/Angry5.png'),
    //     require('../assets/test_images/Angry6.png'),
    //     require('../assets/test_images/Angry7.png'),
    //     require('../assets/test_images/Angry8.png'),
    //     require('../assets/test_images/Angry9.png'),
    //     require('../assets/test_images/Angry10.png'),
    //   ],
      Discouraged: [
        require('../assets/test_images/Discouraged1.png'),
        require('../assets/test_images/Discouraged2.png'),
        require('../assets/test_images/Discouraged3.png'),
        require('../assets/test_images/Discouraged4.png'),
        require('../assets/test_images/Discouraged5.png'),
        require('../assets/test_images/Discouraged6.png'),
        require('../assets/test_images/Discouraged7.png'),
        require('../assets/test_images/Discouraged8.png'),
        require('../assets/test_images/Discouraged9.png'),
        require('../assets/test_images/Discouraged10.png'),
      ],
      Depressed: [
        require('../assets/test_images/Depressed1.png'),
        require('../assets/test_images/Depressed2.png'),
        require('../assets/test_images/Depressed3.png'),
        require('../assets/test_images/Depressed4.png'),
        require('../assets/test_images/Depressed5.png'),
        require('../assets/test_images/Depressed6.png'),
        require('../assets/test_images/Depressed7.png'),
        require('../assets/test_images/Depressed8.png'),
        require('../assets/test_images/Depressed9.png'),
        require('../assets/test_images/Depressed10.png'),
      ],
    //   Indifferent: [
    //     require('../assets/test_images/Indifferent1.png'),
    //     require('../assets/test_images/Indifferent2.png'),
    //     require('../assets/test_images/Indifferent3.png'),
    //     require('../assets/test_images/Indifferent4.png'),
    //     require('../assets/test_images/Indifferent5.png'),
    //     require('../assets/test_images/Indifferent6.png'),
    //     require('../assets/test_images/Indifferent7.png'),
    //     require('../assets/test_images/Indifferent8.png'),
    //     require('../assets/test_images/Indifferent9.png'),
    //     require('../assets/test_images/Indifferent10.png'),
    //   ],
    //   Anxious: [
    //     require('../assets/test_images/Anxious1.png'),
    //     require('../assets/test_images/Anxious2.png'),
    //     require('../assets/test_images/Anxious3.png'),
    //     require('../assets/test_images/Anxious4.png'),
    //     require('../assets/test_images/Anxious5.png'),
    //     require('../assets/test_images/Anxious6.png'),
    //     require('../assets/test_images/Anxious7.png'),
    //     require('../assets/test_images/Anxious8.png'),
    //     require('../assets/test_images/Anxious9.png'),
    //     require('../assets/test_images/Anxious10.png'),
    //   ],
  };

  return moodImages[mood]?.map(image => ({ image })) || [];
};

const MoodScreen: React.FC<Props> = ({ route }) => {
  const { mood } = route.params;

  // Get the corresponding carousel items for the selected mood
  const carouselItems: CarouselItem[] = getCarouselItemsForMood(mood);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.carouselContainer}>
        <Carousel
          data={carouselItems}
          width={400}
          height={400}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              <Image source={item.image} style={styles.carouselImage} />
            </View>
          )}
          autoPlay
          loop
          autoPlayInterval={2000}
          scrollAnimationDuration={10000}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
            parallaxAdjacentItemScale: 0.75,
          }}
        />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  carouselContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  carouselItem: {
    borderRadius: 8,
    overflow: 'hidden',
    flex: 1,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  quetsionText: {
    color: 'black',
    fontSize: 25,
  },
  questionContainer: {
    padding: 10,
    paddingBottom: 30,
  },
});

export default MoodScreen;
