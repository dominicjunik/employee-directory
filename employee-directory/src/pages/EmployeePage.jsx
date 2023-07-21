import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Header from "../components/Header"
import { useEmployeeContext } from "../components/EmployeeContext"



export default function EmployeePage(){

    const { employee }= useEmployeeContext()
    const {EmployeeName: name} = useParams()
    
    console.log(name)
    // console.log(employees)
    const [currentEmployee, setCurrentEmployee] = useState({})
    
    function phoneCode(number){
        let phoneNum = number.split('')        
        phoneNum.splice(3, 0, '-')
        phoneNum.splice(7, 0, '-')
        let newPhoneNum = phoneNum.join('')
        
        console.log(newPhoneNum)
        return newPhoneNum
    }

    function findEmployee(){       

        let thisEmployee = employee.find( (person) => person.name === name )

        


        setCurrentEmployee(thisEmployee)
        console.log(currentEmployee)
    }
    
    console.log(currentEmployee)
    // name === employees[index].name
    useEffect(()=>{
    //    alert('loading stuff')
       findEmployee() 
    }, [])

    return (
    <div className="home-page">
        <Header />
        <div className='profile-box'>            
            <img src={currentEmployee.headshot} className='float'/>
            <div className='employee-info'>
                <h1>{currentEmployee.name}</h1>
                <h2><span style={{color: 'grey'}}>{currentEmployee.title}</span></h2>
            </div>            
        </div>
        
            <h3>
            <Link>Call Office:</Link>
                <br />
                <span style={{color: 'grey'}}>{currentEmployee.phone}</span>
            </h3>        
            <h3>
                <Link>Call Office:</Link> 
                <br />
                <span style={{color: 'grey'}}>{currentEmployee.phone}</span>
            </h3>
            <h3>
                <Link>Call Home:</Link>
                <br />
                <span style={{color: 'grey'}}>{currentEmployee.phone}</span>
            </h3>
            <h3>
                <Link>Call SMS:</Link>
                <br />
                <span style={{color: 'grey'}}>{currentEmployee.phone}</span>
            </h3>
            <h3>
                <Link>Email:</Link>
                <br /> 
                <span style={{color: 'grey'}}>{currentEmployee.email}</span>
            </h3>          
        
        
    </div>
    )
}


