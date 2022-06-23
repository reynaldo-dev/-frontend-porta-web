import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(2),
      boxShadow:theme.shadows[2],
      display: 'flex',
      flexDirection: 'column',
      width:'50%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2)
    },

    title:{
        fontWeight:theme.typography.fontWeightBold,
        color: theme.palette.primary.main
    },

    typo:{
        fontWeight:theme.typography.fontWeightLight,
        marginTop: theme.spacing(2)
    },

    link:{
        fontWeight:theme.typography.fontWeightLight,
        marginTop: theme.spacing(2),
    }


  }));

export const ProyectoCard = ({item}) => {
    const classes = useStyles()
  return (
    <Box className={classes.root} data-aos="fade-up" >
    <Typography variant='h5' className={classes.title} >{item?.nombre_proyecto}</Typography>
    <Typography variant='subtitle1' className={classes.typo} >Rol: {item?.rol}</Typography>
    <Typography variant='subtitle1' className={classes.typo} >Tecnologías: {item?.tecnologias}</Typography>
    <Typography variant='subtitle1' className={classes.typo} >Responsabilidades: {item?.responsabilidades}</Typography>
    <Typography variant='subtitle1' className={classes.typo} >Resumen: {item?.resumen}</Typography>


  </Box>
  )
}
