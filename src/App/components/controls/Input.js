import { TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

export function Input(props) {
  const {
    name,
    label,
    value,
    error = null,
    onChange,
    onBlur,
    control,
    ...other
  } = props
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={value}
      render={({ field }) => (
        <TextField
          variant="outlined"
          label={label}
          {...other}
          {...(error && { error: true, helperText: error })}
          {...field}
        />
      )}
    />
  )
}
