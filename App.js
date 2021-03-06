import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import store from './store';

export default function App() {
  return (
    <View style={styles.container}> 
      <Provider store={store} style={{flex:1}}>
          <Text>Open up App.js to start working on your app!</Text>
      </Provider>
    </View>
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
