import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name : "UserSlice",
    initialState:{
        userInput:
            {
                userName: "",
                userEmail: "",
                // Add more state variables as needed
            },
            userList:[]
        
        

    },
    reducers:{
        oninputChange(state, action){
            let {name , value } = action.payload
            state.userInput[name] = value

        },
        onsaveData(state,action){
            state.userList.push({...state.userInput})
            state.userInput = {
                userName: "",
                userEmail: "",
                // Add more state variables as needed
            }

        }        
    }
})


export default UserSlice;
export const  {oninputChange,onsaveData } = UserSlice.actions