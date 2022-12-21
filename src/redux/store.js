import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers/root.js'
// Creates store
export default configureStore({
    reducer: rootReducer
});