import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import { HomeScreen } from "./HomeScreen";
import { GameScreen } from "./GameScreen"

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Game: { screen: GameScreen },
});

export default App;

