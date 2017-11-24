import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

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
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  