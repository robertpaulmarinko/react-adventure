import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

export class HomeScreen extends React.Component {
  render() {
    // props.navigation is automatically set by the StackNavigator
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Welcome to React Adventure!</Text>
        <Button
          onPress={() => navigate('Game')}
          title="Start Game"
        />          
      </View>
    );
  }
}

export class GameScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>GAME GOES HERE</Text>
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Game: { screen: GameScreen },
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
