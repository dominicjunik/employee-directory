import { useEmployeeContext } from "./EmployeeContext";
import EmployeeListItem from "./EmployeeListItem";
import { Link } from "react-router-dom";



export default function EmployeeList() {

  const { employee } = useEmployeeContext()

  console.log(employee);
  
  return employee.map((employee, index) => {
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
