import { createSlice } from "@reduxjs/toolkit";
import { data }from "./data"


const initialState = {
    employeeList: storedData()
}

function storedData(){    
        let storedData = localStorage.getItem('employeeList')
        let storedDataParsed = JSON.parse(storedData)
        console.log(storedDataParsed)       
        if(storedDataParsed === null){
            console.log('inside the logic')
            return data
        }
        else if(storedDataParsed.length === 0){
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
        },
        searchEmployee: (state, action) => {
            console.log(action.payload)
            let foundPerson = state.employeeList.filter((employee, index)=>employee.name.toLowerCase().includes(action.payload.toLowerCase()))
            console.log(foundPerson)
            
            // state.employeeList = foundPerson
        }

    }
})

export default listSlice.reducer

export const { addEmployee, removeEmployee, searchEmployee } = listSlice.actions