import http from "./client"
import routes from "./routes"

const baseURL = routes.CERTIFICACION_USUARIO_ROUTE;

export const getAll = async () => {
    const response = await http.get(baseURL);
    return response;
}

export const getOnlyCursos = async () => {
    const {data} = await http.get(routes.CERTIFICACION_ROUTE);
    return data;
}

export const postCertificacion = async (data) => {
    const response = await http.post(baseURL, data);
    return response;
}


export const getOneCurso = async () => {
    const response = await http.get(baseURL);
    return response;
}


export const updateCursoUsuario = async (data) => {
    const {u_name, certificadoAnterior, certificadoNuevo} = data;
    const response = await http.put(`${baseURL}/${u_name}/${certificadoAnterior}/${certificadoNuevo}`)
}

export const postCursoUsuario = async (data) => {
    const {u_name, certificado} = data;
    const response = await http.post(baseURL, data)
}

export const deleteOne = async (data) => {
    const {u_name, certificado} = data;
    const response = await http.delete(`${baseURL}/${u_name}/${certificado}`)
}