import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'


const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    alignItems: 'center',
  },

  root1: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',

  },

  container: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },

  img:{
    width: '50%',
    objectFit:'cover',
    borderRadius : '50%',
    marginLeft: theme.spacing(3)
  },

  name:{
    fontWeight:theme.typography.fontWeightLight
  }, 

  intro:{
    fontWeight:theme.typography.fontWeightLight,
    marginTop: theme.spacing(2)
  },

  correo:{
    fontWeight:theme.typography.fontWeightLight,
    marginTop: theme.spacing(2)
  }


}));
export const UserInfoSection = ({usuario}) => {
  const classes = useStyles()

  return (
    <Box className={classes.root1}>
      <Container className={classes.root}>
      <Box className={classes.container}>
        <img src={usuario.urlFoto} className={classes.img} />
      </Box>
      <Box className={classes.container}>
        <Typography variant='h3' className={classes.name}>{usuario?.nombres}</Typography>
        
        <Typography variant='h3' className={classes.name}>{usuario?.apellidos}</Typography>
        <Typography variant='subtitle1' className={classes.intro}>{usuario?.intro}</Typography>
        <Typography variant='subtitle1' className={classes.correo}>{usuario?.correo}</Typography>


      </Box>
      </Container>

    </Box>
  )
}
