import { Backdrop, Box, Button, Fade, makeStyles, Modal, TextareaAutosize, TextField, Typography } from "@material-ui/core"
import { useFormik } from "formik"
import { useMutation, useQueryClient } from "react-query"
import { updateOne } from "../../api/userAPI"

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

export const UpdateUser = ({usuario, isUpdateOpen,setIsUpdateOpen, refetch}) => {
    const classes = useStyles()

    const queryClient =useQueryClient()
    const formik = useFormik({
        initialValues: {
            u_name: usuario.u_name,
            urlFoto: usuario.urlFoto,
            nombres: usuario.nombres,
            apellidos: usuario.apellidos,
            correo: usuario.correo,
            intro: usuario.intro,
        }
    })

     // update 
     const {mutate, data} = useMutation( updateOne, {
        onSuccess: () => {
            queryClient.invalidateQueries('Usuarios')
           
        }
     } )
     const handleUpdate = () => {
        const payload = {
            urlFoto : formik.values.urlFoto,
            nombres : formik.values.nombres,
            apellidos : formik.values.apellidos,
            correo : formik.values.correo,
            intro : formik.values.intro,
        }
         mutate({u_name : usuario.u_name, payload})
         
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
                  <Typography variant='h6' className={classes.title} color='primary' >Editar usuario</Typography>
                  <TextField required disabled className={classes.input} label="Nombre de usuario" name='u_name' value={formik.values.u_name} onChange={formik.handleChange} />
                  <TextField required className={classes.input} label="URL Foto" name='urlFoto' value={formik.values.urlFoto} onChange={formik.handleChange} />
                  <TextField required className={classes.input} label="Nombres" name='nombres' value={formik.values.nombres} onChange={formik.handleChange} />
                  <TextField required className={classes.input} label="Apellidos" name='apellidos' value={formik.values.apellidos} onChange={formik.handleChange} />
                  <TextField required className={classes.input} label="Email" name='correo' value={formik.values.correo} onChange={formik.handleChange} />
                  <TextareaAutosize required className={classes.input} name='intro' value={formik.values.intro} onChange={formik.handleChange} placeholder="Introducción" />
                  <Button className={classes.input} variant="contained" color="primary" onClick={handleUpdate}>Enviar</Button>
              </Box>
          </Fade>
      </Modal>
  )
}
