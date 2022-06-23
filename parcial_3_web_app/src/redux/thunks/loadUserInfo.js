import { createAsyncThunk } from "@reduxjs/toolkit"
import { getOne } from "../../api/userAPI"
import { setUser } from "../slices/userSlice"

export const loadUserInfo =  (u_name) => {
    return async (dispatch) => {
        const user =  await getOne(u_name)
       
        dispatch( setUser({user}) )
       
    }
}

