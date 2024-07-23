import { getuserlist } from "../User.Slice";
import { getUserListService, removeUserService, saveDataservice } from "./user.service";
import { call, put } from "redux-saga/effects";


export function* getUserListHandler() {
   let { data } = yield call(getUserListService)
   yield put(getuserlist(data))

}

export function * saveDataHandler(action){
      let userInput = action.payload;
      yield call(saveDataservice,userInput)
}

export function * removeUserHandler(action){
   try{
   let id = action.payload;
   yield call(removeUserService,id)
   }catch(e){
      console.log(e)
   }

}