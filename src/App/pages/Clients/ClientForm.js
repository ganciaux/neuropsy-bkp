import React from 'react'
import { useForm } from 'react-hook-form'
import { Button as MuiButton, Grid, TextField } from '@mui/material'

export default function ClientForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
        <Grid item xs={6}>
        {/* register your input into the hook by invoking the "register" function */}
        <TextField defaultValue="test" {...register('example')} />

        {/* include validation with required or other standard HTML validation rules */}
        <TextField {...register('exampleRequired', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        </Grid>
        </Grid>
        <MuiButton type="submit">Valider</MuiButton>
    </form>
  )
}
