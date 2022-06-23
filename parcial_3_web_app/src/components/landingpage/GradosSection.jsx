import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { GradoCard } from './cards/GradoCard';
import { ProyectoCard } from './cards/ProyectoCard';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: theme.spacing(3)

   
  },

  typo:{
    fontWeight:theme.typography.fontWeightLight,
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3)

  }

}));

export const GradosSection = ({usuario}) => {

  const classes = useStyles()

  return (
    <Container className={classes.root}>
    <Typography className={classes.typo} variant="h4">Grado Academico</Typography>
    <GradoCard item={usuario.grado_academico}></GradoCard>
  </Container>
  )
}
