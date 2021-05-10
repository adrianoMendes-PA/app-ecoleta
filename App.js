import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/drawer';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        barStyle='default'
        backgroundColor="transparent"
        translucent={true}
      />
      <Drawer />
    </NavigationContainer>
  )
}