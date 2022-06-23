import http from "./client";
import routes from "./routes"


const baseURL = routes.GRADO_ACADEMICO_ROUTE;

export const getAll = async () => {
    const data = await http.get(baseURL)
   return data.data

}

export const postOne = async (payload) => {
    
    const data = await http.post(baseURL, payload)
    return data
}

export const updateOne = async ( data ) => {
    const {u_name, grado, payload} = data
    
    
    

    const res = await http.put(`${baseURL}/${u_name}/${grado}`, payload)
    
}

export const deleteOne = async (payload) => {
    const {u_name,grado} = payload
    const data = await http.delete(`${baseURL}/${u_name}/${grado}`)
    
}

