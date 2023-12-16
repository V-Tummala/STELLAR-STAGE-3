import "react-native-gesture-handler";
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './screens/HomeScreen';
import DailyPicScreen from "./screens/DailyPicScreen";
import SpaceCraftsScreen from "./screens/SpaceCraftsScreen";
import StarMapScreen from "./screens/StarMapScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}> 
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "DailyPic" component={DailyPicScreen}/>
        <Stack.Screen name = "SpaceCrafts" component={SpaceCraftsScreen}/>
        <Stack.Screen name = "StarMap" component={StarMapScreen}/>
      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
