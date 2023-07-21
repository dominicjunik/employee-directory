import { useEmployeeContext } from "./EmployeeContext"
import Form from "./Form"
import {useState} from "react"

export default function DisplayForm() {
    
    const {addEmployee} = useEmployeeContext()
    const [isShown, setIsShown] = useState(false)
    
    function display() {
        setIsShown(current => !current)

    }
    
    return (
        <div>
            <button onClick={display}> {!isShown ? "Add Employee" : "Hide"}</button>
            {isShown && <Form addEmployee={addEmployee} />}
        </div>

        
    )
    
}