import { combineReducers } from "@reduxjs/toolkit";
import cardReducer from "./cardReducer";
import listReducer from "./listReducer";
import boardReducer from "./boardReducer";

const rootReducer = combineReducers({
    // Handles all card actions
    cards:  cardReducer,
    // Handles all list actions
    lists:  listReducer,
    // Handles all board actions
    boards: boardReducer
});

export default rootReducer;