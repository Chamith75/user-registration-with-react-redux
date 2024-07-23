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
            state.userList = action.payload
        },
        getuserListfromserver(state, action){
            
        },
        SaveuserInserver(s,a){},
        deleteuserfromserver(s,a){},
        getuserlist(state,action){
            state.userList = action.payload
        },
        resetinput(state , action){
            state.userInput = {
                userName: "",
                userEmail: "",
                // Add more state variables as needed
            }            
        }
    }
})


export default UserSlice;
export const  {oninputChange,onsaveData ,getuserListfromserver , getuserlist , resetinput , SaveuserInserver, deleteuserfromserver} = UserSlice.actions