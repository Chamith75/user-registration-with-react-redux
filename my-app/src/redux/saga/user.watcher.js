import { takeLatest } from "redux-saga/effects";
import { getUserListHandler, removeUserHandler, saveDataHandler } from "./user.handler";
import {  deleteuserfromserver, getuserListfromserver, SaveuserInserver } from "../User.Slice";

export function* getUserListWatcher(){
    yield takeLatest(getuserListfromserver.type ,getUserListHandler )
}

export function * saveDatawatcher(){
    yield takeLatest(SaveuserInserver.type,saveDataHandler)
}

export function * removeUserWatcher(){
    yield takeLatest(deleteuserfromserver.type , removeUserHandler )
}