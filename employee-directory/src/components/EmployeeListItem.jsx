import { useDispatch } from "react-redux";
import { removeEmployee } from "../employeeListSlice";
// import { data } from "../data";
import { Link } from "react-router-dom";


export default function EmployeeListItem({ title, name, headshot, id }) {
  const dispatch = useDispatch()


    return (
      <div key={id} className="employee-profile" id={id}>
        <img src={headshot} alt={name} className="img" />
        <Link to={`/EmployeePage/${name}`} className="list-box" key={id}>
        <h4 className="name">{name}</h4>
        <p className="title">{title}</p>
        </Link>
        <button onClick={ (event) => {dispatch(removeEmployee(event.target.parentElement.id))} }>remove</button>
      </div>
    );
  }
  // 


  