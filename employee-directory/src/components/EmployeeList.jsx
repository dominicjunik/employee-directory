import { useDispatch, useSelector } from "react-redux";
import { useEmployeeContext } from "./EmployeeContext";
import EmployeeListItem from "./EmployeeListItem";
import { Link } from "react-router-dom";



export default function EmployeeList() {

  // const { employee } = useEmployeeContext()
  const { employeeList } = useSelector((state) => state.list)
  console.log(employeeList)
  
  return employeeList.map((employee, index) => {
    return (
      <Link to={`/EmployeePage/${employee.name}`} className="list-box" key={employee.id}>
        <EmployeeListItem
          name={employee.name}
          headshot={employee.headshot}
          title={employee.title}
          id={employee.id}
        />
      </Link>
    );
  });
}


// add useEffect here