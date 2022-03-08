import axios from "axios"
import { API_URL, GET_TITLES } from "../../type"

export const getTitles = () => {
    console.log("action")
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();

            if (json) {
                console.log("dispatch in action")
                dispatch(setDetails(json));

            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const setDetails = (dta) => {
    return {
        type: GET_TITLES,
        payload: dta
    }
}


// export const getTitles = () => {
//     try {
//         console.log("action")
//         return async dispatch => {
//             const response = await axios.get(API_URL);
//             const json = await response.json();
//             console.log(json)
//             if (json) {
//                 dispatch({
//                     type: GET_TITLES,
//                     payload: json
//                 })
//             } else {
//                 console.log("unable to fetch")
//             }
//         }
//     } catch (error) {
//         console.log("error", error)
//     }
// }




