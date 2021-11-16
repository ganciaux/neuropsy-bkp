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
  const { name, label, value, control } = props
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={value}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
          <MuiDatePicker
            label={label}
            variant="inline"
            inputVariant="outlined"
            value={field.value}
            onChange={(date) =>
              field.onChange(convertToDefEventPara(name, date))
            }
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      )}
    />
  )
}
