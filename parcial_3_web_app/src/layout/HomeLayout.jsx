import { Box, Button, Container, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import { useFormik } from 'formik'
import SearchIcon from '@material-ui/icons/Search';


import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from 'react-query';

import {getAll} from '../api/userAPI';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: theme.typography.fontWeightLight
  },

  container:{
    //backgroundColor: theme.palette.primary.main
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }, 

  input :{
    margin: theme.spacing(1),
    width: '80%',
  },

  box2:{
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems : 'center',
    marginTop: theme.spacing(2)
  },

  btn:{
    borderRadius: '3rem',
    width: '3rem',
    height: '3rem',
    marginLeft: theme.spacing(2)
  }, 

  link:{
    alignSelf: 'flex-start',
    margin: theme.spacing(1),
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium

  },

  select:{
    width: '75%',
  }
}))

export const HomeLayout = () => {
  //const {user} = useSelector((state) => state)
  const navigate = useNavigate()
  const [isError, setIsError] = useState(false);

  const formik = useFormik({
    initialValues: {
      u_name : ''
    }
  })

  const {data : usuarios, isLoading} = useQuery(['Usuarios'], getAll)
    
  const setUser = () => {
    formik.values.usuario == '' ? setIsError(true) : navigate('/landing/' + formik.values.u_name)
  }

  const classess = useStyles()
  return (
   
    <Box boxShadow={2} className={classess.root} >
      <Link to='/administration' className={classess.link} >Administrar</Link>
      
      <Container className={classess.container}>
        <Typography variant="h5" className={classess.title} >
          Encuentra el portafolio de uno de nuestros usuarios
        </Typography>

        <Box className={classess.box2}>
        <Select
        name='u_name'
        value={formik.values.u_name}
        onChange={formik.handleChange}
        className={classess.select}
      
      >

        {
          usuarios && usuarios.map((usuario, index) =>(

            <MenuItem value={usuario.u_name} key={index}>{usuario.u_name}</MenuItem>
          ))
        }
        
              
          
        
      </Select>
          <Button className={classess.btn} size='small' variant="contained" color="primary" onClick={setUser}> <SearchIcon /> </Button>
        </Box>

      </Container>

    </Box>
    
  )
}
