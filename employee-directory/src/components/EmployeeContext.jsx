import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data"

//creates the context
const EmployeeContext = createContext()

//custom hook
export function useEmployeeContext() {
    return useContext(EmployeeContext)
}


// custom Provider Component

export function EmployeeProvider(props){
    let [employee, setEmployee] = useState(()=>{
        let storedData = localStorage.getItem('employeeList')
        if(!storedData){
            return data
        }
        else {return JSON.parse(storedData)}
    });

    useEffect(()=>{
    localStorage.setItem('employeeList', JSON.stringify(employee))
    },[employee])

    function addEmployee(emp) {
        console.log(emp);
        console.log(employee);
        setEmployee([...employee, emp]);
      }

      let sharedValue = {
        employee,
        addEmployee
      }

    return (
       <EmployeeContext.Provider  value={sharedValue}>
        {props.children}
       </EmployeeContext.Provider>
    )
}