import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Controls } from '../../components/controls/Controls'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { makeStyles } from '@mui/styles'
import Notification from '../../components/Notifcation'

const useStyles = makeStyles((theme) => ({}))

const min = '2000-01-01'
const schema = yup
  .object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    age: yup.number().positive().integer().required(),
    birthdate: yup
      .date()
      .min(min, `startDate should be equal or later than ${min}`)
      .required('Date is required'),
  })
  .required()

export default function ClientForm() {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  })

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
    },
  })

  console.log('Forms:render', errors)

  const onSubmit = (data) => {
    console.log('Forms:onSubmit:', data)
    setNotify({
      isOpen: true,
      message: 'Submitted Successfully',
      type: 'success',
    })
  }

  const handleReset = () => {
    reset()
    setNotify({
      isOpen: true,
      message: 'Reset Successfully',
      type: 'error',
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controls.Input
        fullWidth
        margin="normal"
        control={control}
        label="Firstname"
        name="firstname"
        value={'ghislain'}
        error={errors.firstname?.message}
      />
      <Controls.Input
        fullWidth
        margin="normal"
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
        error={errors.birthdate?.message}
      />
      <Controls.Input
        fullWidth
        margin="normal"
        control={control}
        label="Age"
        name="age"
        value={'39'}
        error={errors.age?.message}
      />
      <Controls.Button type="submit" text="Valider" />
      <Controls.Button
        type="button"
        color="error"
        text="Reset"
        onClick={handleReset}
      />
      <Notification notify={notify} setNotify={setNotify} />
    </form>
  )
}
