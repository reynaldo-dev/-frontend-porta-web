import http from './client'

 const baseURL = '/api/Usuarios'


export const getAll = async () => {
    const data = await http.get(baseURL)
   return data.data

}

export const getOne = async (u_name) => {
    const data = await http.get(`${baseURL}/${u_name}`)
    
   return data.data

}



export const postOne = async (payload) => {
    const data = await http.post(baseURL, payload)
    return data
}

export const updateOne = async (data) => {
    const {u_name} = data
    const {payload}  = data
    const res = await http.put(`${baseURL}/${u_name}`, payload)

   
    
}

export const deleteOne = async (u_name) => {
    const data = await http.delete(`${baseURL}/${u_name}`)

}

