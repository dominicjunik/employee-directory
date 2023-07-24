import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./employeeListSlice"
import filteredReducer from './filterSlice'


export const store = configureStore({
    reducer: {
        list: listReducer,
        filter: filteredReducer
        
    }
})