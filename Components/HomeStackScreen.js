import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import DetailsScreen from "./DetailsScreen";
import HomeScreen from "./HomeScreen";

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={HomeScreen} />
                <HomeStack.Screen name="Details" component={DetailsScreen} />
          </HomeStack.Navigator>
       
    )
}
export default HomeStackScreen;