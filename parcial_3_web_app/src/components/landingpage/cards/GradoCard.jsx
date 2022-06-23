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

export const GradoCard = ({item}) => {
  console.log(item)
    const classes = useStyles()
  return (
    <Box className={classes.root} data-aos="fade-up" >
    <Typography variant='subtitle1' className={classes.typo} >Universidad: {item?.universidad}</Typography>
    <Typography variant='subtitle1' className={classes.typo} >Profesion: {item?.profesion}</Typography>
    <Typography variant='subtitle1' className={classes.typo} >Objetivos: {item?.objetivos}</Typography>
  </Box>
  )
}
