import { useDispatch, useSelector } from "react-redux";

import EmployeeListItem from "./EmployeeListItem";
import { Link } from "react-router-dom";
import { useEffect } from "react";




export default function EmployeeList() {
  

  // const { employee } = useEmployeeContext()
  const { employeeList } = useSelector((state) => state.list)
  console.log(employeeList)

  useEffect(()=>{
    localStorage.setItem('employeeList', JSON.stringify(employeeList))
  },[employeeList])
  
  
  return employeeList.map((employee, index) => {
    return (
      
        <EmployeeListItem
          key={employee.id}
          name={employee.name}
          headshot={employee.headshot}
          title={employee.title}
          id={employee.id}
        />
      
    );
  });
}


