import http from "./client"
const baseURL = '/api/ExperienciaUsuario'

export const getAll = async () => {
    const data = await http.get(baseURL)
   return data.data

}

export const postOne = async (payload) => {
    const data = await http.post(baseURL, payload)
    return data
}

export const updateOne = async ( data ) => {
    const {u_name} = data
    const {nombre_proyecto} = data
    
    const payload = {
        nombre_proyecto: data?.nombre_proyecto,
        rol: data?.rol,
        resumen: data?.resumen,
        responsabilidades: data?.responsabilidades,
        tecnologias: data?.tecnologias,
        
    }

    const res = await http.put(`${baseURL}/${u_name}/${nombre_proyecto}`, payload)
    
}

export const deleteOne = async ({u_name, proyecto}) => {
    const data = await http.delete(`${baseURL}/${u_name}/${proyecto}`)
}