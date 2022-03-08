import React, { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

const Dashboard = () => {
const [data,setdata] =useState();

    const getMovies = async () => {
        try {
         const response = await fetch('https://swapi.dev/api/people/1');
         const json = await response.json();
         console.log(json.name);
         setdata(json.name)
       } catch (error) {
         console.error(error);
       } 
     }

    return (
        <View>
            <Button title="getData" onPress={getMovies} />
            <Text>{JSON.stringify(data)}</Text>
           
        </View>
    )
}
export default Dashboard;