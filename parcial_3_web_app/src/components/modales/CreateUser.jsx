import { Backdrop, Box, Button, Container, Fade, makeStyles, Modal, TextareaAutosize, TextField, Typography } from "@material-ui/core"
import { useFormik } from "formik"
import { useMutation, useQueryClient } from "react-query"
import { postOne } from "../../api/userAPI"

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

export const CreateUser = ({isOpen, setIsOpen, refetch}) => {
    const classes = useStyles()
    const queryClient =useQueryClient()

    const formik = useFormik({
        initialValues: {
            u_name: '',
            urlFoto: '',
            nombres: '',
            apellidos: '',
            correo: '',
            intro: '',
        }
    })
    

    // posting new user
    const {mutate, data} = useMutation( postOne, {
        onSuccess: () => {
            queryClient.invalidateQueries('Usuarios')
        }
    } )
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
                  <Typography variant='h6' className={classes.title} color='primary' >Crear usuario</Typography>

                  <TextField required className={classes.input} label="Nombre de usuario" name='u_name' value={formik.values.u_name} onChange={formik.handleChange} />
                  <TextField required className={classes.input} label="URL Foto" name='urlFoto' value={formik.values.urlFoto} onChange={formik.handleChange} />
                  <TextField required className={classes.input} label="Nombres" name='nombres' value={formik.values.nombres} onChange={formik.handleChange} />
                  <TextField required className={classes.input} label="Apellidos" name='apellidos' value={formik.values.apellidos} onChange={formik.handleChange} />
                  <TextField required className={classes.input} label="Email" name='correo' value={formik.values.correo} onChange={formik.handleChange} />
                  <TextareaAutosize required className={classes.input} name='intro' value={formik.values.intro} onChange={formik.handleChange} placeholder="Introducción" />
                  <Button className={classes.input} variant="contained" color="primary" onClick={handlePost}>Enviar</Button>
              </Box>
          </Fade>
      </Modal>
  )
}

