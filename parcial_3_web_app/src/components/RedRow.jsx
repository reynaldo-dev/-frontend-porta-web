import {
  Button,
  Link,
  makeStyles,
  TableCell,
  TableRow,
} from "@material-ui/core";
import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDeleteUsuarioRed } from "../hooks/fetching/RedesUsuarios";
import RedUpdateModal from "./modales/RedUpdateModal";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: theme.spacing(1),
  },
}));

const RedRow = ({ data }) => {
  const classes = useStyles();

  const [isEditOpen, setIsEditOpen] = useState(false);
  const { mutate } = useDeleteUsuarioRed();
  const handleEditOpen = (data) => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);

  const handleDelete = (redName) => {
    mutate({
      u_name: data.u_name,
      red: redName,
    });
  };

  return (
    <>
      {data.redes.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{data.u_name}</TableCell>
          <TableCell>{item.nombre}</TableCell>
          <TableCell>
            <Link href={item.accesslink} target={"_blank"}>
              {item.accesslink}
            </Link>
          </TableCell>
          <TableCell align="center">
            <Button
              variant="contained"
              className={classes.btn}
              color="primary"
              onClick={handleEditOpen}
            >
              <EditIcon />
            </Button>
            <Button
              variant="contained"
              className={classes.btn}
              color="primary"
              onClick={() => {
                handleDelete(item.nombre);
              }}
            >
              <DeleteIcon />{" "}
            </Button>
          </TableCell>
          {isEditOpen && (
            <RedUpdateModal
              isOpen={isEditOpen}
              handleClose={handleEditClose}
              handleOpen={handleEditOpen}
              data={{
                u_name: data.u_name,
                redAnterior: item.nombre,
                linkAnterior: item.accesslink,
              }}
            />
          )}
        </TableRow>
      ))}
    </>
  );
};

export default RedRow;
