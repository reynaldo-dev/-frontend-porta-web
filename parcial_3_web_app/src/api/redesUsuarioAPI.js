import http from "./client";
import routes from "./routes";

export const getAllRedes = async () => {
  const { data } = await http.get(routes.REDES_USUARIO);
  return data;
};

export const deleteOne = async ({ u_name, red }) => {
  const { data } = await http.delete(
    `${routes.REDES_USUARIO}/${u_name}/${red}`
  );
  return data;
};

export const getOnlyRedes = async () => {
  const { data } = await http.get('/api/redes/');
  return data;
};

export const postRedUsuario = async (dataUsuario) => {
  const { data } = await http.post(routes.REDES_USUARIO, dataUsuario);
  return data;
};


export const putEditarRed = async ({ u_name, redAnterior, redNueva }) => {
  const { data } = await http.put(
    `${routes.REDES_USUARIO}/EditarRed/${u_name}/${redAnterior}/${redNueva}`
  );
  return data;
};

export const putEditarLink = async ({ u_name, red, linkNuevo }) => {
  const { data } = await http.put(
    `${routes.REDES_USUARIO}/EditarLink/${u_name}/${red}/${linkNuevo}`
  );
  return data;
};
