import React from 'react'
import PageHeader from '../../components/PageHeader'
import {
  PeopleOutlineOutlined,
} from '@mui/icons-material'
import {
  Paper,
  Toolbar,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import ClientForm from './ClientForm'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(5),
  },
}))

export default function Clients() {
    const classes = useStyles()
    return (
        <>
      <PageHeader
        title="New client"
        subTitle="Form with validation"
        icon={<PeopleOutlineOutlined fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <ClientForm />
        </Toolbar>
      </Paper>
    </>
    )
}
