import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { CertificacionCard } from "./cards/CertificacionCard";



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
    marginBottom: theme.spacing(3)
  }

 
}));


export const CertificacionesSection = ({usuario}) => {

  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Typography className={classes.typo} variant="h4" >Certificaciones</Typography>
      {
        usuario?.certificacion?.map((c, index) => (
          <CertificacionCard key={index} item={c} />
        ))
      }
    </Container>
  )
}
