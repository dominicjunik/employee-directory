import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Form from "./Form";
import Form2 from "./Form2";
import DisplayForm from "./DisplayForm"

import { useState } from "react";

export default function HomePage() {

  const [isShown, setIsShown] = useState(false)

  function displayForm(){
    setIsShown(current => !current)
  }

  return (
    <div className="home-page">
      <Header header="Employee Directory" />
      <SearchBar />
      <EmployeeList />
      <DisplayForm />     
    </div>
  );
}
