import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filtered: []
}

const filteredList = createSlice({
    name: 'filteredList',
    initialState,
    reducers: {
        searchEmployee: (state, action) => {
            console.log('hi')
            console.log(action.payload)
            let foundPerson = action.payload.employeeList.filter((employee, index)=>employee.name.toLowerCase().includes(action.payload.input.toLowerCase()))
            console.log(foundPerson)      

            state.filtered = foundPerson
        }
    }
})

export default filteredList.reducer

export const { searchEmployee } = filteredList.actions