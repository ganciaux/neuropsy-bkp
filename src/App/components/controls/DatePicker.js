import React from 'react'
import TextField from '@mui/material/TextField'
import { DatePicker as MuiDatePicker } from '@mui/lab'
import frLocale from 'date-fns/locale/fr'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { Controller } from 'react-hook-form'

const convertToDefEventPara = (name, value) => ({
  target: {
    name,
    value,
  },
})

export function DatePicker(props) {
  const { name, label, value, onChange } = props

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
      <MuiDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export function DatePicker2(props) {
  const { name, label, value, control, error = null } = props

  console.log('DatePicker2:', error)
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={value}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty },
      }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
          <MuiDatePicker
            label={label}
            variant="inline"
            inputVariant="outlined"
            value={value}
            format="MM/dd/yyyy"
            onChange={(date) => onChange(convertToDefEventPara(name, date))}
            renderInput={(params) => (
              <TextField
                margin="normal"
                {...(error && { error: true, helperText: error })}
                {...params}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  )
}
