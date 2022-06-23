import { Button, makeStyles, TableCell, TableRow } from '@material-ui/core'
import React, { useState } from 'react'

import { useMutation, useQueryClient } from 'react-query'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


import { UpdateGrado } from './modales/UpdateGrado';
import { deleteOne } from '../api/gradoAPI';


const useStyles = makeStyles(theme =>({
    btn : {
        margin: theme.spacing(1),
    }
}))
export const GradoRow = ({grado,index,u_name}) => {

    const classes = useStyles()
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const queryClient = useQueryClient()


    const {mutate} = useMutation( deleteOne, {
        onSuccess: () => {
            queryClient.invalidateQueries('Grados')
        }
    } )
    const handleDelete = async () => {
       mutate({u_name, grado:grado?.profesion })
    }


  return (
     <TableRow key={index}>
          <TableCell component="th" scope="row">
              {u_name}
          </TableCell>
          <TableCell align="center">{grado?.profesion}</TableCell>
          <TableCell align="center">{grado?.objetivos}</TableCell>
          <TableCell align="center">{grado?.universidad}</TableCell>
          <TableCell align="center">
              <Button variant="contained" className={classes.btn} onClick={() => setIsUpdateOpen(!isUpdateOpen)}  color="primary" ><EditIcon /></Button>
              <Button variant="contained" className={classes.btn}  color="primary" onClick={handleDelete}><DeleteIcon /> </Button>
          </TableCell>

            {isUpdateOpen && <UpdateGrado grado={grado} u_name={u_name} setIsUpdateOpen={setIsUpdateOpen} isUpdateOpen={isUpdateOpen} />}
      </TableRow>
  )
}
