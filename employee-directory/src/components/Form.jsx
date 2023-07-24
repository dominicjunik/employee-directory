import { useState } from "react";
import { useDispatch } from "react-redux";
// import randomly, { randomNumber } from "../utility/randomly";
//controlled component/form
import { addEmployee } from "../employeeListSlice";

export default function Form() {

  const dispatch = useDispatch()

  let [form, setForm] = useState({
    name: "",
    title: "",
    phone: "",
    email: "",    
  });
  
  let [error, setError] = useState({
    nameError: false,
    nameMessage:'name must be between 3 and 8 letters',
    titleError: false,
    phoneError: false,
    emailError: false,
  });

  let errors = {
    name: 'name must be between 3 and 8 letters',
    title: 'title must be between 3 and 16 letters',
    phone: 'must be only numbers',
    email: 'must be a valid email containing @ and .'
  }
  

  function handleSubmit(event) {
    // prevent the page from reloading because its an on submit
    event.preventDefault();
    // alert(form);
    // let rngHeadshot = `../images/headshot${randomNumber(12)}.jpeg`;
    let employee = {
      ...form,
      headshot: '../images/headshot9.jpeg',
      borderColor: "blue",
      id: crypto.randomUUID()
    };
    // if name.length < 3 || name.length >8 { set vale = " NAME TOO LONG OR SHORT" style ={border:red}}
    console.log(employee.name)
    if(employee.name.length < 3 || employee.name.length > 8){
      let newError = {...error, nameError: true}      
      setError(newError)
      return;      
    }
   
    setForm({
      name: "",
      title: "",
      phone: "",
      email: ""
    });

    setError({
      ...error,
      nameError: false,      
      titleError: false,
      phoneError: false,
      emailError: false,
    });

    ;
    dispatch(addEmployee(employee))   
       
    
  }

  //form.name <-- dot notation to get the value of form.name

  //let prop = 'name'

  //form[prop]  <-- bracket notation

  function handleChange(event) {
    // setInput(event.target.value);
    // called computer property name
    let key = event.target.id;
    setForm({ ...form, [key]: event.target.value });
  }
 //{contitional rendering a <p className="error"> with error message </p>}
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" style={{borderColor:error.nameError ? 'red' : 'black' }} value={form.name} onChange={handleChange} />
      {error.nameError && (<p className="error-message">{error.nameMessage}</p>)}     
      <br />
      <label htmlFor="title">Title</label>
      <input id="title" value={form.title} onChange={handleChange}></input>
      <br />
      <label htmlFor="phone">Phone #</label>
      <input id="phone" value={form.phone} onChange={handleChange}></input>
      <br />
      <label htmlFor="email">Email</label>
      <input id="email" value={form.email} onChange={handleChange}></input>
      <br />
      <button>Submit</button>
    </form>
  );
}
