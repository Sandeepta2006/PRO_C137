import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./Screens/home";
import DetailScreen from "./Screens/detail";

export default function App() {
  return (
    <AppContainer></AppContainer>
  );
}

const appStackNavigator= createStackNavigator({
  Home: {screen: HomeScreen,
  navigationOptions: {
    headerShown: false
  }}, 
  Details: {screen: DetailScreen
  }},
  {
    initialRouteName: "Home"
  }
  )

  const AppContainer= createAppContainer(appStackNavigator)