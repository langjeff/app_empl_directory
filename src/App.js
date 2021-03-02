import API from "./utils/API";
import React, { useState, useEffect } from "react";
import EmplTable from "./components/table";

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
      <h2>Employee Table:</h2>
      <EmplTable employees={employees} />
    </div>
  );
}

export default App;
