import { TextField } from '@mui/material'
import React from 'react'
import { useForm, Controller } from "react-hook-form";

export const Input = (props) => {
  const { name, label, value, error = null, onChange, ...other } = props
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  )
}

export const InputRef = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

export const InputRef2 = React.forwardRef(({ name, label, value, error = null, onChange, ...other }, ref) => (
  <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
));

<Controller
        name="firstName"
        control={control}
        render={({ field }) => <Input {...field} />}
      />

      <Controller
        name="select"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]} 
        />}
      />