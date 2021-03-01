import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "picture", headerName: "Picture", width: 70 },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "dob", headerName: "Date of Birth", width: 70 },
];

const rows = (employees) => {
  employees.map((employee) => ({
    picture: employee.picture.thumbnail,
    firstName: employee.name.first,
    lastName: employee.name.last,
    email: employee.email,
    dob: employee.dob.date.substring(0, 10),
  }));
};

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={25} />
    </div>
  );
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// import { DataGrid } from "@material-ui/data-grid";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// export default function EmployeeTable({ employees }) {
//   const classes = useStyles();

//   const [sortedField, setSortedField] = React.useState(null);

//   let sortedEmployees = [...employees];
//   sortedEmployees.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell></TableCell>
//             <TableCell>
//               {" "}
//               <Button
//                 size="small"
//                 variant="outlined"
//                 color="primary"
//                 href="#outlined-buttons"
//               >
//                 Name
//               </Button>
//             </TableCell>{" "}
//             <TableCell align="left">Email</TableCell>
//             <TableCell align="left">Address</TableCell>
//             <TableCell align="left">Date of Birth</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {employees.map((employee) => (
//             <TableRow key={employee.email}>
//               <TableCell component="th" scope="row">
//                 <img src={employee.picture.thumbnail}></img>
//               </TableCell>
//               <TableCell align="left">{`${employee.name.first} ${employee.name.last}`}</TableCell>
//               <TableCell align="left">{`${employee.email}`}</TableCell>
//               <TableCell align="left">{`${employee.location.street.number} ${employee.location.street.name} ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}`}</TableCell>
//               <TableCell align="left">
//                 {employee.dob.date.substring(0, 10)}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
