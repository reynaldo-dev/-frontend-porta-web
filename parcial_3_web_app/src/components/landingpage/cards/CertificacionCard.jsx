import { Box, Link, makeStyles, Typography } from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room';

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

export const CertificacionCard = ({item}) => {
    const classes = useStyles()
    
  return (
    <Box className={classes.root} data-aos="fade-up" >
      <Typography variant='h5' className={classes.title} >{item?.nombre}</Typography>
      <Typography variant='subtitle1' className={classes.typo} >{item?.descripcion}</Typography>
      <Typography variant='subtitle1' className={classes.typo} > <RoomIcon />{item?.institucion}</Typography>

      <Link href={item?.link} className={classes.link} >Ir al curso</Link>
     


    </Box>
  )
}
