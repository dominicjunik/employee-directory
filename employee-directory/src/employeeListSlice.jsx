import { createSlice } from "@reduxjs/toolkit";
import { data }from "./data"

const initialState = {
    employeeList: storedData()
}

function storedData(){    
        let storedData = localStorage.getItem('employeeList')
        let storedDataParsed = JSON.parse(storedData)       
        if(storedDataParsed.length === 0){
            console.log('inside the logic')
            return data
        }
        else {return storedDataParsed}
    }


const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            console.log(state.employeeList)
            state.employeeList.push(action.payload)
        },
        removeEmployee: (state, action) => {            
            let current = state.employeeList.findIndex((employee)=>employee.id === action.payload)
            state.employeeList.splice(current, 1)
            console.log(current)
        }
    }
})

export default listSlice.reducer

export const { addEmployee, removeEmployee } = listSlice.actions