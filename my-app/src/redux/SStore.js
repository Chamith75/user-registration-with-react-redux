import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./User.Slice";
import createSagaMiddleware from 'redux-saga'
import { rootsaga } from "./saga/user.rootsaga";

const sagaMiddleware = createSagaMiddleware()

const SStore = configureStore({
    reducer : {
        users : UserSlice.reducer        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootsaga)

export default SStore