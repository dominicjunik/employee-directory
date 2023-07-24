import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filtered: []
}

const filteredList = createSlice({
    name: 'filteredList',
    initialState,
    reducers: {
        searchEmployee: (state, action) => {
            console.log(action.payload)
            let foundPerson = state.employeeList.filter((employee, index)=>employee.name.toLowerCase().includes(action.payload.toLowerCase()))
            console.log(foundPerson)      

            state.filtered = foundPerson
        }
    }
})

export default filteredList.reducer

export const { searchEmployee } = filteredList.actions