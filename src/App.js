import API from "./utils/API";
import React, { useState, useEffect } from "react";

import EmployeeTable from "./components/table";
import DataGridDemo from "./components/table copy";
import { Tab } from "@material-ui/core";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then((res) => {
        setEmployees(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Employee List:</h1>
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default App;
