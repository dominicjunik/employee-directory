import { useEffect, useState } from "react";
import { searchEmployee } from "../employeeListSlice";
import { useDispatch } from "react-redux";


export default function SearchBar() {
  let [input, setInput] = useState('')
  let dispatch = useDispatch()

    function handleChange(event){
    setInput(event.target.value)
    
  }
  useEffect(() => {dispatch(searchEmployee(input))}, [input])

    return (
      <div className="search">
        <input type="text" placeholder="Search bar is here" value={input} onChange={handleChange}/>
      </div>
    );
  }
  