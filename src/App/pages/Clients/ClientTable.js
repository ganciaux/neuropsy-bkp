import React, { useState } from 'react'
import { TableBody, TableCell, TableRow } from '@mui/material'
import { PeopleOutlineOutlined } from '@mui/icons-material'
import useTable from '../../components/useTable'
import { Controls } from '../../components/controls/Controls'

const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email' },
  { id: 'mobile', label: 'Mobile Number' },
  { id: 'department', label: 'Department' },
  { id: 'actions', label: 'Actions', disableSorting: true },
]

const records = []

export default function ClientTable() {
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells)
  return (
    <>
      <TblContainer>
        <TblHead />
        <TableBody>
          {recordsAfterPagingAndSorting().map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.fullName}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.mobile}</TableCell>
              <TableCell>{item.department}</TableCell>
              <TableCell>
                <Controls.ActionButton color="primary" onClick={() => {}}>
                  <PeopleOutlineOutlined fontSize="small"></PeopleOutlineOutlined>
                </Controls.ActionButton>
                <Controls.ActionButton color="secondary" onClick={() => {}}>
                  <PeopleOutlineOutlined fontSize="small"></PeopleOutlineOutlined>
                </Controls.ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
    </>
  )
}
