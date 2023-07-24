import { createSlice } from "@reduxjs/toolkit";
import { data }from "./data"

const initialState = {
    employeeList: data
}

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            console.log(state.employeeList)
            state.employeeList.push(action.payload)
        }
    }
})

export default listSlice.reducer

export const { addEmployee } = listSlice.actions