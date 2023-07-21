import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EmployeeProvider } from "./components/EmployeeContext"
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <Router>
      <EmployeeProvider>
        <App />
      </EmployeeProvider>      
    </Router>
    
  </StrictMode>
);
