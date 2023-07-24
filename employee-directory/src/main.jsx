import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EmployeeProvider } from "./components/EmployeeContext"
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import { store } from "./store";
import { Provider } from "react-redux";

root.render(
  <StrictMode>
    <Router>      
        <Provider store={store}>
          <App />
        </Provider> 
    </Router>
  </StrictMode>
);
