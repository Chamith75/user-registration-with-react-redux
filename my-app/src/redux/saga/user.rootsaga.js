import { all } from "redux-saga/effects";
import { getUserListWatcher, removeUserWatcher, saveDatawatcher } from "./user.watcher";

export function * rootsaga(){

    let array = [getUserListWatcher(),saveDatawatcher() , removeUserWatcher()];
    yield all(array)


}