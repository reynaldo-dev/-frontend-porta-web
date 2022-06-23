import { Button, makeStyles, TableCell, TableRow } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { UpdateProject } from './modales/UpdateProject';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deleteOne } from '../api/portafolioAPI';


const useStyles = makeStyles(theme =>({
    btn : {
        margin: theme.spacing(1),
    }
}))

export const PortafolioRow = ({proyecto, u_name}) => {

    useEffect(() => {
    }, []);
    const classes = useStyles()
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const queryClient =useQueryClient()

    
    const {mutate, data} = useMutation( deleteOne, {
        onSuccess: () => {
            queryClient.invalidateQueries('Portafolio')
            
        }
     } )
    const handleDelete = async () => {
        mutate({u_name, proyecto:proyecto?.nombre_proyecto})
    }
    return (
        

        <TableRow>
            <TableCell component="th" scope="row">
                {proyecto?.nombre_proyecto}
            </TableCell>
            <TableCell align="center">{proyecto?.rol}</TableCell>
            <TableCell align="center">{proyecto?.resumen}</TableCell>
            <TableCell align="center">{proyecto?.responsabilidades}</TableCell>
            <TableCell align="center">{proyecto?.tecnologias}</TableCell>
            <TableCell align="center">{u_name}</TableCell>
            <TableCell align="center">
                <Button variant="contained" className={classes.btn} onClick={() => setIsUpdateOpen(!isUpdateOpen)} color="primary" ><EditIcon /></Button>
                <Button variant="contained" className={classes.btn} color="primary" onClick={handleDelete}><DeleteIcon /> </Button>
            </TableCell>

            {isUpdateOpen && <UpdateProject isUpdateOpen={isUpdateOpen} setIsUpdateOpen={setIsUpdateOpen} proyecto={proyecto} u_name={u_name} />}

        </TableRow >

        

    )
}
