import {
  Backdrop,
  Box,
  Button,
  makeStyles,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getOnlyCursos } from "../../api/certificacionAPI";
import { getAll } from "../../api/userAPI";
import { useMutationCursoUsuario } from "../../hooks/fetching/Cursos";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[5],
    display: "flex",
    flexDirection: "column",
    width: "30%",
  },

  title: {
    marginTop: theme.spacing(2),
    fontWeight: theme.typography.fontWeightRegular,
    alignSelf: "center",
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    marginTop: theme.spacing(2),
  },
}));

const CursoModal = ({ isOpen, handleOpen, handleClose }) => {
  const { data: cursos } = useQuery(["cursos"], getOnlyCursos);
  const [curso, setCurso] = useState("");
  const [usuario, setUsuario] = useState("");
  const { data: usuarios } = useQuery(["usuarios"], getAll);

  const { mutate } = useMutationCursoUsuario();

  const handleCurso = (event) => {
    setCurso(event.target.value);
  };

  const handleUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const handleSend = () => {
    mutate({
      u_name: usuario,
      nombreCertificacion: curso,
    });
  };

  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box className={classes.container}>
        <Typography variant="h6" className={classes.title} color="primary">
          Enlazar Certificacion
        </Typography>
        <>
          <TextField
            select
            label="Usuario"
            helperText="Selecciona un usuario para enlazar una certificacion"
            className={classes.input}
            value={usuario}
            onChange={handleUsuario}
          >
            {usuarios &&
              usuarios.map((option, index) => (
                <MenuItem key={index} value={option.u_name}>
                  {option.u_name}
                </MenuItem>
              ))}
          </TextField>
        </>
        <>
          <TextField
            select
            label="Curso"
            helperText="Selecciona un curso"
            className={classes.input}
            value={curso}
            onChange={handleCurso}
          >
            {cursos &&
              cursos.map((option, index) => (
                <MenuItem key={index} value={option.nombre}>
                  {option.nombre}
                </MenuItem>
              ))}
          </TextField>
          <Button
            className={classes.input}
            variant="contained"
            color="primary"
            onClick={handleSend}
          >
            Enviar
          </Button>
        </>
      </Box>
    </Modal>
  );
};

export default CursoModal;
