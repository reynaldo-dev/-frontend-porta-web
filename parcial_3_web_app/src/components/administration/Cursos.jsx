import { Container, TableContainer, Typography, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react'
import { useCursos } from '../../hooks/fetching/Cursos';
import CertificacionRow from '../CertificacionRow';
import CursoModal from '../modales/CursoModal';


const useStyles = makeStyles(theme => ({
  root: {
    
  }, 

  table:{
    marginTop: theme.spacing(3),
  },

  title :{
    marginTop: theme.spacing(2),
    fontWeight: theme.typography.fontWeightRegular,
  }
}))


export const Cursos = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const {data: certificaciones} = useCursos();
  const classes = useStyles()

  return (
    < >
      <Container>
      <Typography variant='h6' className={classes.title}>Listado de Certificaciones</Typography>
      <TableContainer className={classes.table}>
        <Table className={classes.table}  aria-label='Tabla de certificaciones'>
          <TableHead>
            <TableRow>
              <TableCell>Titulo</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Institución</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell align='center'>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              (!certificaciones) 
              ? <></>
              : <>
                {
                certificaciones.data.map((item, index)=> (
                  <CertificacionRow key={index} user={item}></CertificacionRow>
                ))
                }
                </>
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Fab color="primary" aria-label="add" style={{ float: 'right', marginTop: '1rem' }} onClick={handleOpen}>
        <AddIcon />
      </Fab>
      {isOpen && (
            <CursoModal
              isOpen={isOpen}
              handleClose={handleClose}
              handleOpen={handleOpen}
            />
          )}
      </Container>
   
    </>
  )
}
