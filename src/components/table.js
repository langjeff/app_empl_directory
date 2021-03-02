import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "firstName", headerName: "First Name", width: 200 },
  { field: "lastName", headerName: "Last name", width: 200 },
  { field: "email", headerName: "Email", width: 300 },
  { field: "dob", headerName: "Date of Birth", width: 200 },
];

export default function EmplTable({ employees }) {
  const rows = [];
  employees.map((employee) =>
    rows.push({
      id: employee.email,
      firstName: employee.name.first,
      lastName: employee.name.last,
      email: employee.email,
      dob: employee.dob.date.substring(0, 10),
    })
  );
  console.log(rows);
  return (
    <div>
      <DataGrid autoHeight rows={rows} columns={columns} pageSize={25} />
    </div>
  );
}
