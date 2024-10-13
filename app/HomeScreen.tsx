import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './index'; // Assuming you have defined types for your navigation stack
import { shuffleArray } from '../scripts/shuffleArray.js'

// Define the mood colors
const moodColors: {

  Happy: string;
  Angry: string;
  Discouraged: string;
  Depressed: string;
  Indifferent: string;
  Anxious: string;

} = {

  Happy: '#FFC0CB', // Yellow
  Angry: '#FF3737', // Red
  Discouraged: '#AAAAAA', // Gray
  Depressed: '#3A3D98', // Dark Gray
  Indifferent: '#008000', // Light Gray
  Anxious: '#FFC107', // Orange

};

type CarouselItem = {
  image: any;
};

const HomeScreen: React.FC = () => {
  const [text, setText] = useState<string>('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [carouselItems, setCarouselItems] = useState([
    { image: require('../assets/test_images/quote1.png') },
    { image: require('../assets/test_images/quote2.png') },
    { image: require('../assets/test_images/quote3.png') },
  ]);

  useEffect(() => {
    // Shuffle items when the component mounts
    setCarouselItems(shuffleArray(carouselItems));
  }, []);

  const navigateToMoodScreen = (mood: string) => {
    navigation.navigate('MoodScreen', { mood });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      {/* <View style={styles.logoContainer}>
        <Image source={require('../assets/test_images/Quotable_logo.png')} style={styles.logo} />
      </View> */}

      {/* Image Carousel with Parallax */}
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
      <View style={styles.questionContainer}>
        <Text style={[styles.quetsionText]}>How Do You Feel Right Now?</Text>
      </View>
      {/* Mood Buttons */}
      <View style={styles.moodButtonsContainer}>
        {['Happy', 'Angry', 'Discouraged', 'Depressed', 'Indifferent', 'Anxious'].map((mood) => (
              <TouchableOpacity key={mood} style={[styles.moodButton, { backgroundColor: moodColors[mood as keyof typeof moodColors] }]} onPress={() => navigateToMoodScreen(mood)}>
            <Text style={[styles.moodButtonText]}>{mood}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};



// StyleSheet for the components
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    aspectRatio: 1,  // Ensures the logo maintains aspect ratio
    resizeMode: 'contain',
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
  textBox: {
    flex: 1,
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  moodButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  moodButton: {
    padding: 15,
    borderRadius: 5,
    margin: 5,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moodButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  quetsionText:{
    color: 'black',
    fontSize: 25,

  },
  questionContainer:{
    padding: 10,
    paddingBottom:30,

  }
});

export default HomeScreen;
