import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Grid } from '@mui/material'
import { Controls } from '../../components/controls/Controls'

export default function ClientForm() {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  const defaultValues = {
    firstname: '',
    lastname: '',
    age: '',
    birthDate: new Date(),
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    console.log({ [name]: value })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            control={control}
            label="Firstname"
            name="firstname"
            value={'ghislain'}
          />
          <Controls.Input
            control={control}
            label="LastName"
            name="lastname"
            value={'ANCIAUX'}
          />
          <Controls.Input
            control={control}
            label="Age"
            name="age"
            value={'39'}
          />
          <Controls.DatePicker2
            control={control}
            label="BirthDate"
            name="birtdate"
            value={new Date()}
          />
        </Grid>
      </Grid>
      <Controls.Button type="submit" text="Valider" />
      <button type="button" onClick={() => reset(defaultValues)}>
        reset 2
      </button>
    </form>
  )
}
