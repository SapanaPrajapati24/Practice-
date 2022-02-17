import React from "react";
import { Button, Text, View } from "react-native";

const SettingsScreen = ({navigation}) =>{
    return(
        <View>
           <Text>SettingsScreen</Text>
           <Button title="go to details" onPress={() => navigation.navigate('Details')} />
        </View>
    )
}
export default SettingsScreen;