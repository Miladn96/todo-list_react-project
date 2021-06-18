import { combineReducers } from "redux";
import { dueDateReducer, singleThingReducer, thingsReducer, titleReducer } from "./things";

export const reducers = combineReducers({
    things: thingsReducer,
    dueDate: dueDateReducer,
    singleThing: singleThingReducer,
    title: titleReducer,
})