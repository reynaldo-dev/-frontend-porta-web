import { Container, Fab, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import AddIcon from '@material-ui/icons/Add';

import { getAll } from '../../api/gradoAPI'
import { GradoRow } from '../GradoRow'
import { CreateGrado } from '../modales/CreateGrado';


const useStyles = makeStyles(theme => ({
  root: {
    
  }, 

  table:{
    marginTop: theme.spacing(3),
  },

  title :{
    marginTop: theme.spacing(2),
    fontWeight: theme.typography.fontWeightRegular,
  },

  tableBody:{
    display: 'flex',
    flexDirection: 'column'
  }
}))

export const GradoAcademico = () => {

  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false);

  const {data : grados, isLoading,isError,refetch} = useQuery(['Grados'], getAll)
 
  return (
    <Container>
      <Typography variant='h6' className={classes.title} >Listado de usuarios con su grado académico</Typography>

      <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Usuario</TableCell>
              <TableCell align="center">Profesión</TableCell>
              <TableCell align="center">Objetivos</TableCell>
              <TableCell align="center">Universidad</TableCell>
              <TableCell align="center">Acciones</TableCell>

            </TableRow>
          </TableHead>
        
            
            <TableBody>
            {
             
              grados && grados.map((grado, index) => (
                < >
                  {
                    grado.gradoAcademico.map((gradoAcademico, index) => (
                      
                      <GradoRow key={index} grado={gradoAcademico} index={index} u_name={grado?.u_name}  />
                    ))
                  }
                </>
              ))
            }


           
          </TableBody>
          
        </Table>
      </TableContainer>

      <Fab color="primary" aria-label="add" style={{float : 'right', marginTop:'1rem'}} onClick={() => setIsOpen(!isOpen)}>
        <AddIcon />
      </Fab>

      {
        isOpen && <CreateGrado isOpen={isOpen} setIsOpen={setIsOpen}/>
      }
    </Container>
  )
}
