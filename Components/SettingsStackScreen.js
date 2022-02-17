import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SettingsScreen from './SettingsScreen'
import DetailsScreen from './DetailsScreen'


const SettingStack = createNativeStackNavigator();
const SettingsStackScreen = () => {
    return(
        <SettingStack.Navigator>
            <SettingStack.Screen name="Settings" component={SettingsScreen} />
            <SettingStack.Screen name="Details" component={DetailsScreen} />
        </SettingStack.Navigator>
    )
}
export default SettingsStackScreen;