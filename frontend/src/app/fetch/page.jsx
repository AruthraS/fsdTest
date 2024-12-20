'use client'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const page = () => {
    const [data,setData] = useState([]);
    useEffect(async ()=>{
        try{
            const response = await axios.post("http://localhost:8000/fetch");
            console.log(response.data);
            setData(response.data.data);
        }
        catch(err){
            console.log(err);
        }
    },[])
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Department</TableCell>
                        <TableCell align="center">Role</TableCell>
                        <TableCell align="center">Date of Joining</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Phone Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row,index) => (
                        <TableRow
                            key={index}
                        >
                            <TableCell align="center">{row.emp_id}</TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.dept}</TableCell>
                            <TableCell align="center">{row.role}</TableCell>
                            <TableCell align="center">{(row.doj).substring(0,10)}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.ph_number}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default page;