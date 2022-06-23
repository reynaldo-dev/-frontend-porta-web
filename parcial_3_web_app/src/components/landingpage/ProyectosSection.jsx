import { Container, makeStyles, Typography } from "@material-ui/core";
import { ProyectoCard } from "./cards/ProyectoCard";


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


export const ProyectosSection = ({usuario}) => {

  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Typography className={classes.typo} variant="h4" >Proyectos</Typography>
      {
        usuario?.experiencia?.map((c, index) => (
          <ProyectoCard key={index} item={c} />
        ))
      }
    </Container>
  )
}
