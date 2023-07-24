import { useDispatch, useSelector } from "react-redux";
import EmployeeListItem from "./EmployeeListItem";
import { useEffect } from "react";




export default function EmployeeList() {  

  //function that returns a part of the state you want
  const { employeeList } = useSelector((state) => state.list)

  console.log(employeeList)

  useEffect(()=>{
    localStorage.setItem('employeeList', JSON.stringify(employeeList))
  },[employeeList])
  
  // if searchbar input is not empty render search employee filtered list
  // else render the whole list
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


