import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { applicants } from '../data/db';

const columns = [
  { id: 'first_name', label: 'Atı' },
  { id: 'last_name', label: 'Familiyası' },
  { id: 'middle_name', label: 'Ákesiniń atı' },
  { id: 'date_of_birth', label: 'Tuwılǵan sánesi' },
  { id: 'phone_number', label: 'Telefon nomeri' },
  { id: 'secondary_phone_number', label: 'Ekinshi telefon nomeri' },
  { id: 'direction', label: 'Tálim baǵdarı' },
  { id: 'type_of_education', label: 'Tálim túri' },
  { id: 'source', label: 'Qay jerden?' },
  { id: 'created_at', label: 'Jaratılǵan waqtı' },
  { id: 'updated_at', label: 'Jańalanǵan waqtı' },
];



export default function StickyHeadTable({searchVal}) {
    const rows = applicants.filter(applicant => (applicant.first_name + " " + applicant.last_name + " " + applicant.middle_name).toLowerCase().includes(searchVal.toLowerCase()))
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
            <TableRow>
            {columns.map((column) => (
                <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                >
                {column.label}
                </TableCell>
            ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
                return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                    const value = row[column.id];
                    return (
                        <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
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