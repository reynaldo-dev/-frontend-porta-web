import { Backdrop, Box, Button, Fade, makeStyles, MenuItem, Modal, Select, TextField, Typography } from '@material-ui/core'
import { useFormik } from 'formik'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { updateOne } from '../../api/gradoAPI'

const useStyles = makeStyles(theme => ({

  container : {
      backgroundColor : '#fff',
      padding: theme.spacing(2),
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows[5],
      display: 'flex',  
      flexDirection: 'column',
      width:'30%',

  },

  title:{
      marginTop: theme.spacing(2),
      fontWeight: theme.typography.fontWeightRegular,
      alignSelf: 'center'
  },

  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },

  input: {
      marginTop: theme.spacing(2),
  }
}))


export const UpdateGrado = ({grado, isUpdateOpen,setIsUpdateOpen,u_name}) => {

  const classes = useStyles()

  const queryClient = useQueryClient()


  const formik = useFormik({
    initialValues: {
      u_name,
      objetivos: grado?.objetivos,
      profesion: grado?.profesion,
      universidad: grado?.universidad,
    }
  })



  // update 
  const { mutate, data } = useMutation(updateOne, {
    onSuccess: () => {
      queryClient.invalidateQueries('Grados')
      setIsUpdateOpen(false)
    }
  })
  const handleUpdate = () => {

    mutate({u_name, grado:grado?.profesion, payload:formik.values})

  }
  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className={classes.modal}
    open={isUpdateOpen}
    onClose={() => setIsUpdateOpen(false)}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={isUpdateOpen} >
      <Box className={classes.container}>
        <Typography variant='h6' className={classes.title} color='primary' >Editar grado académico</Typography>
        <TextField required className={classes.input} label="Objetivos" name='objetivos' value={formik.values.objetivos} onChange={formik.handleChange} />
        <TextField required className={classes.input} label="Profesión" name='profesion' value={formik.values.profesion} onChange={formik.handleChange} />
        <TextField required className={classes.input} label="Universidad" name='universidad' value={formik.values.universidad} onChange={formik.handleChange} />
               
          <Select
            name='u_name'
            value={formik.values.u_name}
            onChange={formik.handleChange}
            disabled
          >
            <MenuItem value={formik.values.u_name}>{formik.values.u_name}</MenuItem>

          </Select>
        <Button className={classes.input} variant="contained" color="primary" onClick={handleUpdate}>Enviar</Button>
      </Box>
    </Fade>
  </Modal>
  )
}
