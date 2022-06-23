import { Container, Fab, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import AddIcon from '@material-ui/icons/Add';
import { CreateProject } from '../modales/CreateProject';
import { getAll } from '../../api/portafolioAPI';
import { PortafolioRow } from '../PortafolioRow';



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

export const Habilidades = () => {

  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false);

  const {data : proyectos, isLoading,isError,refetch} = useQuery(['Portafolio'], getAll)

  return (
    <Container>
      <Typography variant='h6' className={classes.title} >Listado de proyectos</Typography>

      <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Proyecto</TableCell>
              <TableCell align="center">Rol</TableCell>
              <TableCell align="center">Resumen</TableCell>
              <TableCell align="center">Responsabilidades</TableCell>
              <TableCell align="center">Tecnologías</TableCell>
              <TableCell align="center">Usuario</TableCell>
              <TableCell align="center">Acciones</TableCell>


            </TableRow>
          </TableHead>


          <TableBody >
            {
              //TODO: recorrer cada uno de los proyectos y mandarlos al row
              proyectos && proyectos.map((proyecto, index) => (
                < >
                  {
                    proyecto.experiencia.map((experiencia, index) => (
                      <PortafolioRow u_name={proyecto?.u_name} proyecto={experiencia} />
                    ))
                  }
                </>
              ))
            }
          </TableBody>

        </Table>
      </TableContainer>

      <Fab color="primary" aria-label="add" style={{ float: 'right', marginTop: '1rem' }} onClick={() => setIsOpen(!isOpen)}>
        <AddIcon />
      </Fab>

      {
        isOpen && <CreateProject isOpen={isOpen} setIsOpen={setIsOpen}  />
      }
    </Container>
  )
}
