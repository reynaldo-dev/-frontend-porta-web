import { Backdrop, Box, Button, Fade, makeStyles, MenuItem, Modal, Select, TextField, Typography } from '@material-ui/core'
import { useFormik } from 'formik'
import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { postOne } from '../../api/gradoAPI'
import { getAll } from '../../api/userAPI'

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
export const CreateGrado = ({isOpen, setIsOpen}) => {

  const classes = useStyles()
  const queryClient =useQueryClient()
  const {data : usuarios, isLoading,isError,refetch} = useQuery(['Usuarios'], getAll)


  const formik = useFormik({
      initialValues: {
        u_name: '' ,
       objetivos:'',
       profesion: '',
       universidad: '',
      }
  })

  // posting new user
  const { mutate, data } = useMutation(postOne, {
    onSuccess: () => {
      queryClient.invalidateQueries('Grados')
    }
  })
  const handlePost = () => {
    mutate(formik.values)
  }

  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className={classes.modal}
    open={isOpen}
    onClose={() => setIsOpen(false)}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={isOpen} >
      <Box className={classes.container}>
        <Typography variant='h6' className={classes.title} color='primary' >Agregar un nuevo grado académico</Typography>
        <TextField required className={classes.input} label="Objetivos" name='objetivos' value={formik.values.objetivos} onChange={formik.handleChange} />
        <TextField required className={classes.input} label="Profesión" name='profesion' value={formik.values.profesion} onChange={formik.handleChange} />
        <TextField required className={classes.input} label="Universidad" name='universidad' value={formik.values.universidad} onChange={formik.handleChange} />
               
        <Select
        name='u_name'
        value={formik.values.u_name}
        onChange={formik.handleChange}
      >
        {
            usuarios && usuarios.map((usuario,index) => (
              
              <MenuItem value={usuario?.u_name}>{usuario?.u_name}</MenuItem>
            ))
          }
      </Select>
        <Button className={classes.input} variant="contained" color="primary" onClick={handlePost}>Enviar</Button>
      </Box>
    </Fade>
  </Modal>
  )
}
