import {
  Container,
  TableContainer,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import { useRedesUsuarios } from "../../hooks/fetching/RedesUsuarios";
import CursoModal from "../modales/CursoModal";
import RedUserModal from "../modales/RedUserModal";
import RedRow from "../RedRow";

const useStyles = makeStyles((theme) => ({
  root: {},

  table: {
    marginTop: theme.spacing(3),
  },

  title: {
    marginTop: theme.spacing(2),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const Redes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const { data: redesUsuario } = useRedesUsuarios();
  const classes = useStyles();

  return (
    <>
      <Container>
        <Typography variant="h6" className={classes.title}>
          Listado de Redes Sociales
        </Typography>
        <TableContainer className={classes.table}>
          <Table
            className={classes.table}
            aria-label="Tabla de certificaciones"
          >
            <TableHead>
              <TableRow>
                <TableCell>Usuario</TableCell>
                <TableCell>Red Social</TableCell>
                <TableCell>Link</TableCell>
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            {
              <TableBody>
                {!redesUsuario ? (
                  <></>
                ) : (
                  <>
                    {redesUsuario.map((data, index) => (
                      <RedRow data={data} key={index} />
                    ))}
                  </>
                )}
              </TableBody>
            }
          </Table>
        </TableContainer>
        {isOpen && (
          <RedUserModal
            isOpen={isOpen}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        )}

        <Fab
          color="primary"
          aria-label="add"
          onClick={handleOpen}
          style={{ float: "right", marginTop: "1rem" }}
        >
          <AddIcon />
        </Fab>
      </Container>
    </>
  );
};
