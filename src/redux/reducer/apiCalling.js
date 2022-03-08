import { GET_TITLES } from "../../type";

const initialState = {
    cities : [],
}

 const ApiCalling = (state= initialState,action) => {
    console.log("reducer")

    switch(action.type){
        case GET_TITLES : 
        return {...state,cities: action.payload}

         default : return state;
        }

}

export default ApiCalling;

