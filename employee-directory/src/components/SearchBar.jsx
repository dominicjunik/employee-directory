import { useEffect, useState } from "react";
// import { searchEmployee } from "../employeeListSlice";
import { useDispatch, useSelector } from "react-redux";
import { searchEmployee, setInput } from "../filterSlice";


export default function SearchBar() {
  // let [input, setInput] = useState('')
  let dispatch = useDispatch()
  const { employeeList } = useSelector((state) => state.list)
  const { input } = useSelector((state) => state.filter)

    function handleChange(event){
      dispatch(setInput({input: event.target.value}))
      // dispatch(searchEmployee({input: event.target.value, employeeList}))
    }
  // useEffect(() => {dispatch(searchEmployee({input, employeeList}))}, [input])

    return (
      <div className="search">
        <input type="text" placeholder="Search bar is here" onChange={handleChange}/>
      </div>
    );
  }
  