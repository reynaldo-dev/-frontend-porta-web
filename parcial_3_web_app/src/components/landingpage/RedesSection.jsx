import { Container, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  typo:{
    fontWeight:theme.typography.fontWeightLight,
    marginBottom: theme.spacing(3)
  }
}));

export const RedesSection = ({ usuario }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography className={classes.typo} variant="h4">
        Redes Sociales
      </Typography>
      {usuario.redes_sociales ? (
        <>
          {usuario.redes_sociales.map((item, index) => (
            <Link href={item.accesslink} target='_blank'>
              <Typography>
                 {item.nombre}
              </Typography>
             </Link>
          ))}
        </>
      ) : (
        <Typography className={classes.typo} variant="h6">
          No Hay Redes Sociales
        </Typography>
      )}
    </Container>
  );
};
