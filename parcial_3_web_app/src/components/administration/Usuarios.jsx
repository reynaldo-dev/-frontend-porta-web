import { Container, Fab, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAll} from '../../api/userAPI';
import { CreateUser } from '../modales/CreateUser';
import { UsuarioRow } from '../UsuarioRow'

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




export const Usuarios = () => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false);

  const {data : usuarios, isLoading,isError,refetch} = useQuery(['Usuarios'], getAll)

useEffect(() => {
    refetch()
}, [isOpen]);

 
  return (
    <Container>
      <Typography variant='h6' className={classes.title} >Listado de usuarios</Typography>

      <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombres</TableCell>
              <TableCell align="center">Apellidos</TableCell>
              <TableCell align="center">Nombre de usuario</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
        
            
            <TableBody>
            {
              usuarios && usuarios.map((usuario,index) => (
                <UsuarioRow key={index} usuario={usuario} refetch={refetch} />
              ))
            }
          </TableBody>
          
        </Table>
      </TableContainer>

      <Fab color="primary" aria-label="add" style={{float : 'right', marginTop:'1rem'}} onClick={() => setIsOpen(!isOpen)}>
        <AddIcon />
      </Fab>

      {
        isOpen && <CreateUser isOpen={isOpen} setIsOpen={setIsOpen} refetch={refetch}/>
      }
    </Container>
  )
}
