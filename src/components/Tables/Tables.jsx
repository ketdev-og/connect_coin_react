import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import { fontWeight } from "@mui/system";
import axios from "axios";

export default function StickyHeadTable({ rows, columns, link }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigateProfile = (id) => {
    return navigate("/dashboard/user", { state: { id: id } });
  };

  const approveWith = (id) =>{
   return axios.post('http://localhost:8660/v1/auth/validate/withdraw', {
      id:id
    })
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: Colors.primary,
                    color: "white",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    onClick={() => {
                      if (link) {
                        navigateProfile(row.id);
                      }
                    }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return column.id !== "button" ? (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            color:
                              row.status === "pending" && column.id === "status"
                                ? Colors.secondary_dark 
                                : row.status === "successfull" && column.id === "status" ? "green" : "",
                           
                                 fontWeight: column.id === "status" ? "bold" : "",
                            fontSize: column.id === "status" ? "1rem" : "",
                          }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      ) : (
                        <TableCell key={column.id} align={column.align}>
                          <button
                            style={{
                              backgroundColor: Colors.faded,
                              padding: "0.2rem 1rem",
                              borderRadius: "10px",
                            }}
                            onClick={()=>{approveWith(row.id)}}
                          >
                            Approve
                          </button>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
