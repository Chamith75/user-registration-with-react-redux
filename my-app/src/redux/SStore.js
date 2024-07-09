import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./User.Slice";

const SStore = configureStore({
    reducer : {
        users : UserSlice.reducer        
    },
})

export default SStore