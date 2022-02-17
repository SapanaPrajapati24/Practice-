import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View,Text } from 'react-native';
import HomeStackScreen from './Components/HomeStackScreen'
import SettingsStackScreen from './Components/SettingsStackScreen'

const Tab = createBottomTabNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='HomeStackScreen' component={HomeStackScreen} />
        <Tab.Screen name='SettingsStackScreen' component={SettingsStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App;