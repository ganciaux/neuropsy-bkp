import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Grid } from '@mui/material'
import { Controls } from '../../components/controls/Controls'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  age: yup.number().positive().integer().required(),
  birthdate: yup.date().required('Date is required'),
}).required();

export default function ClientForm() {
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstname: 'Ghis',
      lastname: 'ANC',
      age: '39',
      birthdate: new Date(),
    }
  });

  console.log("Forms:render", errors);

  const onSubmit = (data) => console.log('Forms:onSubmit:', data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            control={control}
            label="Firstname"
            name="firstname"
            value={'ghislain'}
            error={errors.firstname?.message}
          />
          <Controls.Input
            control={control}
            label="LastName"
            name="lastname"
            value={'ANCIAUX'}
            error={errors.lastname?.message}
          />
          <Controls.DatePicker2
            control={control}
            label="BirthDate"
            name="birthdate"
            value={new Date()}
          />
          <Controls.Input
            control={control}
            label="Age"
            name="age"
            value={'39'}
            error={errors.age?.message}
          />
        </Grid>
      </Grid>
      <Controls.Button type="submit" text="Valider" />
      <Controls.Button type="submit" text="Reset" onClick={() => reset()}/>
    </form>
  )
}
