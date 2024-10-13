import React from 'react';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { schedulePushNotification } from '../scripts/pushNotifications.js'
import HomeScreen from './HomeScreen';
import MoodScreen from './MoodScreen';

// Define the type for the stack navigator parameters
export type RootStackParamList = {
  Home: { mood: string };
  MoodScreen: { mood: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  useEffect(() => {
    // Schedule the notification when the app loads
    schedulePushNotification(8, 30); // Schedule notification for 8:30 AM
  }, []);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MoodScreen" component={MoodScreen} />
    </Stack.Navigator>
  );
};

export default App;
