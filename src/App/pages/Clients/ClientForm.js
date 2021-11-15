import React from 'react'
import { useForm } from 'react-hook-form'
import {Grid } from '@mui/material'
import { Controls } from '../../components/controls/Controls'

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
        <Controls.InputRef2 {...register("example")} name='example'/>
        <input defaultValue="test" {...register("test")} />
        </Grid>
        </Grid>
        <Controls.Button type="submit"  text="Valider"/>
    </form>
  )
}
