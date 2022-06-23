import { Button, makeStyles, TableCell, TableRow } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';
import { UpdateUser } from './modales/UpdateUser';
import { deleteOne } from '../api/userAPI';
import { useMutation, useQueryClient } from 'react-query';

const useStyles = makeStyles(theme =>({
    btn : {
        margin: theme.spacing(1),
    }
}))

export const UsuarioRow = ({usuario, refetch}) => {
    const classes = useStyles()
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const queryClient = useQueryClient()

    const {mutate} = useMutation( deleteOne, {
        onSuccess: () => {
            queryClient.invalidateQueries('Usuarios')
        }
    } )
    const handleDelete = async () => {
       mutate(usuario?.u_name)
    }
  return (
      <TableRow key={usuario.id_usuario}>
          <TableCell component="th" scope="row">
              {usuario.nombres}
          </TableCell>
          <TableCell align="center">{usuario.apellidos}</TableCell>
          <TableCell align="center">{usuario.u_name}</TableCell>
          <TableCell align="center">{usuario.correo}</TableCell>
          <TableCell align="center">
              <Button variant="contained" className={classes.btn} onClick={() => setIsUpdateOpen(!isUpdateOpen)}  color="primary" ><EditIcon /></Button>
              <Button variant="contained" className={classes.btn}  color="primary" onClick={handleDelete}><DeleteIcon /> </Button>
          </TableCell>

            {isUpdateOpen && <UpdateUser usuario={usuario} setIsUpdateOpen={setIsUpdateOpen} isUpdateOpen={isUpdateOpen} refetch={refetch}/>}
      </TableRow>
  )
}

