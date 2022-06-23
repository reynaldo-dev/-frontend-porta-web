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
import { getOnlyRedes } from "../../api/redesUsuarioAPI";
import { getAll } from "../../api/userAPI";
import { useMutationCursoUsuario } from "../../hooks/fetching/Cursos";
import { useMutationRedUsuario } from "../../hooks/fetching/RedesUsuarios";

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

const RedUserModal = ({ isOpen, handleOpen, handleClose }) => {
  const { data: cursos } = useQuery(["redes"], getOnlyRedes);
  const [curso, setCurso] = useState("");
  const [usuario, setUsuario] = useState("");
  const { data: usuarios } = useQuery(["usuarios"], getAll);

  const [accessLink, setAccessLink] = React.useState("");

  const handleChange = (event) => {
    setAccessLink(event.currentTarget.value);
  };

  const { mutate } = useMutationRedUsuario();

  const handleCurso = (event) => {
    setCurso(event.target.value);
  };

  const handleUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const handleSend = () => {
    mutate({
      u_name: usuario,
      nombreRed: curso,
      accessLink: accessLink
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
          Agregar una Red Social
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
            label="Red Social"
            helperText="Selecciona una Red Social"
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
          <>
            <TextField
              value={accessLink}
              onChange={handleChange}
              label="Link"
              helperText="Ej: https://twitter.com/elonmusk"
              className={classes.input}
            ></TextField>
          </>
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

export default RedUserModal;
