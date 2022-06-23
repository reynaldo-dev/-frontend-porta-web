import { Backdrop, Box, Button, Fade, makeStyles, MenuItem, Modal, Select, TextareaAutosize, TextField, Typography } from "@material-ui/core"
import { useFormik } from "formik"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { updateOne } from "../../api/portafolioAPI"
import { getAll } from "../../api/userAPI"


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

export const UpdateProject = ({proyecto, isUpdateOpen,setIsUpdateOpen,u_name}) => {

  const classes = useStyles()

    const queryClient =useQueryClient()


    const formik = useFormik({
      initialValues: {
        nombre_proyecto: proyecto?.nombre_proyecto,
        rol: proyecto?.rol,
        resumen: proyecto?.resumen,
        responsabilidades: proyecto?.responsabilidades,
        tecnologias: proyecto?.tecnologias,
        u_name

    }
    })

 

     // update 
     const {mutate, data} = useMutation( updateOne, {
        onSuccess: () => {
            queryClient.invalidateQueries('Portafolio')
            setIsUpdateOpen(false)
        }
     } )
     const handleUpdate = () => {
      
         mutate(formik.values)
        
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
        <Typography variant='h6' className={classes.title} color='primary' >Editar proyecto</Typography>

        <TextField disabled required className={classes.input} label="Nombre del proyecto" name='nombre_proyecto' value={formik.values.nombre_proyecto} onChange={formik.handleChange} />
        <TextField required className={classes.input} label="Rol" name='rol' value={formik.values.rol} onChange={formik.handleChange} placeholder='desarrollador, tester, etc...' />
        <TextField required className={classes.input} label="Responsabilidades" name='responsabilidades' value={formik.values.responsabilidades} onChange={formik.handleChange} />
        <TextField required className={classes.input} label="Tecnologias" name='tecnologias' value={formik.values.tecnologias} onChange={formik.handleChange} placeholder='react, node, aws...' />
        
        <Select
        name='u_name'
        value={formik.values.u_name}
        onChange={formik.handleChange}
        disabled
      >
        
              
              <MenuItem value={formik.values.u_name}>{formik.values.u_name}</MenuItem>
          
        
      </Select>

        <TextareaAutosize required className={classes.input} name='resumen' value={formik.values.resumen} onChange={formik.handleChange} placeholder="Resumen" />
        <Button className={classes.input} variant="contained" color="primary" onClick={handleUpdate}>Enviar</Button>
      </Box>
    </Fade>
  </Modal>
  )
}
