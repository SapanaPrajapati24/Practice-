import React from "react";
import { View,Text,Button } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View>
           <Text>HomeScreen</Text>
            <Button title="go to details" onPress={() => navigation.navigate('Details') } />
        </View>
    )
}
export default HomeScreen;