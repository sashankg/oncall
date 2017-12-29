import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar 
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Navigation from './src/components/Navigation';

export default class App extends React.Component {
  render() {
    return <View style={{  flex: 1  }}>
        <StatusBar />
        <Navigation />
    </View>
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
