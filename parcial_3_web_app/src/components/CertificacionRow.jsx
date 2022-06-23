import {
  TableCell,
  TableRow,
  Link,
  Button,
  makeStyles,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";
import { useDeleteCurso } from "../hooks/fetching/Cursos";
import UpdateCursoModal from "./modales/UpdateCursoModal";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: theme.spacing(1),
  },
}));

const CertificacionRow = ({ user: item }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const handleEditOpen = (data) => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);
  const { mutate, data } = useDeleteCurso();

  const handleDelete = (cursoName) => {
    mutate({
      certificado: cursoName,
      u_name: item.u_name,
    });
  };

  const classes = useStyles();
  return (
    <>
      {item.certificacion.map((curso, index) => (
        <TableRow key={index}>
          <TableCell>{curso.nombre}</TableCell>
          <TableCell>{curso.descripcion}</TableCell>
          <TableCell>{curso.institucion}</TableCell>
          <TableCell>
            <Link href={curso.link} target={"_blank"}>
              Ir Al Curso
            </Link>
          </TableCell>
          <TableCell>{item.u_name}</TableCell>
          <TableCell align="center">
            <Button
              variant="contained"
              className={classes.btn}
              color="primary"
              onClick={() => handleEditOpen()}
            >
              <EditIcon />{" "}
            </Button>
            <Button
              variant="contained"
              className={classes.btn}
              color="primary"
              onClick={() => handleDelete(curso.nombre)}
            >
              <DeleteIcon />{" "}
            </Button>
          </TableCell>

          {isEditOpen && (
            <UpdateCursoModal
              isOpen={isEditOpen}
              handleClose={handleEditClose}
              handleOpen={handleEditOpen}
              data={{ u_name: item.u_name, currentCurso: curso.nombre }}
            />
          )}
        </TableRow>
      ))}
    </>
  );
};

export default CertificacionRow;
