import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function EmployeeTable({ employees }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Date of Birth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.email}>
              <TableCell component="th" scope="row">
                <img src={employee.picture.thumbnail}></img>
              </TableCell>
              <TableCell align="left">{`${employee.name.first} ${employee.name.last}`}</TableCell>
              <TableCell align="left">{`${employee.email}`}</TableCell>
              <TableCell align="left">{`${employee.location.street.number} ${employee.location.street.name} ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}`}</TableCell>
              <TableCell align="left">
                {employee.dob.date.substring(0, 10)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
