import { Alert, Snackbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(9),
  },
}))

export default function Notification(props) {
  const classes = useStyles()
  const { notify, setNotify } = props

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setNotify({ ...notify, isOpen: false })
  }
  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={notify.type}>
        {notify.message}
      </Alert>
    </Snackbar>
  )
}
