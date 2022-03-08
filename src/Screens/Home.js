import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getTitles } from "../redux/action";


const Home = () => {

    const { cities } = useSelector(state => state.ApiCalling)
    const homeDispatch = useDispatch();
    console.log(cities, "titletitle")
    
    useEffect(() => {
        console.log("home")
        homeDispatch(getTitles())
        // console.warn("datae",title)

    }, [])

    return (
        <View>
            <Text>Titles</Text>
            {/* <Text>{title}</Text> */}
            {
                console.log("return")
            }
            <FlatList
                data={cities}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.country}</Text>
                        <Text>{item.city}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Home;




// export const getTitles = () => {

//     return async function (dispatch) {
//         return axios.get(API_URL)
//             .then(({ data }) => {
//                 dispatch(setArticleDetails(data));
//             });
//     };

// }

// const setArticleDetails = data => {
//     return {
//         type: GET_TITLES,
//         payload: json
//     }
// }